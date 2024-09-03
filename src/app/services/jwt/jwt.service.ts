import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { TranslatePipe } from 'src/app/pipes/translate/translate.pipe';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const API = environment.api;

@Injectable({
  providedIn: 'root',
})
/**
 * This service is responsible for management of the jwt token, which would be used
 * for authentication/authorization purposes. The service includes methods to save, delete
 * and retrieve the token
 */
export class JwtService {
  private token: string = '';
  private REDIRECT_URI = `${window.location.origin}/callback`; 
  private STATE = 'randomlyGeneratedString';

  constructor(private translate: TranslatePipe, private http: HttpClient) {}

  getToken(): String {
    if (this.isTokenExpired()) { 
      return '';
    }
    this.token = JSON.parse(localStorage.getItem("token"));
    return this.token;
  }

  redirectToFacebookLogin() {
    const fbOAuthUrl = `https://www.facebook.com/v20.0/dialog/oauth?response_type=token&client_id=${API.appId}&redirect_uri=${this.REDIRECT_URI}&auth_type=rerequest&scope=${API.scope}`;
    window.location.href = fbOAuthUrl;
  }
  // Save the token and its expiry time in memory
  saveToken(token: string, expiresIn: number) {
    if (!token) {
      throw new Error(
        this.translate.transform('generic[responses][error][token][002]')
      );
    }
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("tokenExpiry", JSON.stringify(Date.now() + 59 * 24 * 60 * 60 * 1000));
  }

  // Check if the token is expired
  isTokenExpired(): boolean {
    return JSON.parse(localStorage.getItem("tokenExpiry")) < Date.now();
  }

  // Fetch a long-lived user token, renewing it if expired
  public getLongLiveUserToken(shortTokenAfterLogin): Promise<string> {
    if(shortTokenAfterLogin) {
      let params = new HttpParams()
        .set('grant_type', 'fb_exchange_token')
        .set('client_id', API.appId)
        .set('client_secret', API.appSecret)
        .set('scope', API.scope)
        .set('fb_exchange_token', shortTokenAfterLogin);

      return this.http
        .get(`${API.host}/oauth/access_token`, { params })
        .pipe(catchError(this.formatErrors))
        .toPromise()
        .then((response: any) => {
          this.saveToken(response.access_token, response.expires_in);
          return response.access_token;
        });
    } else if (!this.getToken()) {
      this.redirectToFacebookLogin();
    } else {
      return Promise.resolve(this.token);
    }
  }

  // Fetch page tokens using the long-lived user token
  public getPageTokens(longLivedUserToken: string) {
    return this.http
      .get(`${API.host}/me/accounts`, {
        params: new HttpParams().set('access_token', longLivedUserToken),
      })
      .pipe(catchError(this.formatErrors));
  }

  // Format errors
  public formatErrors(error: any) {
    return throwError(error.error);
  }

  public get(url: string, params: HttpParams = new HttpParams(), shortToken?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getLongLiveUserToken(shortToken).then(
        (longLivedToken: string) => {
          this.getPageTokens(longLivedToken).toPromise().then(
            (pages: any) => {
              const pageToken = pages.data[0].access_token;
              const updatedParams = params.set('access_token', pageToken);

              this.http.get(url, { params: updatedParams })
                .pipe(catchError(this.formatErrors))
                .toPromise()
                .then(response => resolve(response))
                .catch(error => reject(error));
            },
            error => reject(error)
          );
        },
        error => reject(error)
      );
    });
  }

  /**
   * Generalized POST method that handles token acquisition.
   */
  public post(url: string, body: any = {}, shortToken?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getLongLiveUserToken(shortToken).then(
        (longLivedToken: string) => {
          this.getPageTokens(longLivedToken).toPromise().then(
            (pages: any) => {
              const pageToken = pages.data[0].access_token;
              body.access_token = pageToken;

              this.http.post(url, body)
                .pipe(catchError(this.formatErrors))
                .toPromise()
                .then(response => resolve(response))
                .catch(error => reject(error));
            },
            error => reject(error)
          );
        },
        error => reject(error)
      );
    });
  }
}
