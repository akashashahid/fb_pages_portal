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
  private tokenExpiry: number = 0;
  private REDIRECT_URI = window.location.href; 
  private STATE = 'randomlyGeneratedString';

  constructor(private translate: TranslatePipe, private http: HttpClient) {}

  generateShortLiveToken(): any {
    this.redirectToFacebookLogin();
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('access_token');
  }

  getToken(): String {
    if (this.isTokenExpired()) { 
      return '';
    }
    return this.token;//get from saved memory
  }

  redirectToFacebookLogin() {
    const fbOAuthUrl = `${API.host}/dialog/oauth?client_id=${API.appId}&redirect_uri=${this.REDIRECT_URI}&state=${this.STATE}`;
    window.location.href = fbOAuthUrl;
  }
  // Save the token and its expiry time in memory
  saveToken(token: string, expiresIn: number) {
    if (!token) {
      throw new Error(
        this.translate.transform('generic[responses][error][token][002]')
      );
    }

    this.token = token;
    this.tokenExpiry = Date.now() + expiresIn * 1000; // Convert expires_in to milliseconds
  }

  // Check if the token is expired
  isTokenExpired(): boolean {
    return this.tokenExpiry < Date.now();
  }

  // Fetch a long-lived user token, renewing it if expired
  public getLongLiveUserToken(shortTokenAfterLogin): Promise<string> {
    if (!this.getToken()) {
      this.redirectToFacebookLogin();
    } else if(shortTokenAfterLogin) {
      let params = new HttpParams()
        .set('grant_type', 'fb_exchange_token')
        .set('client_id', API.appId)
        .set('client_secret', API.appSecret)
        .set('fb_exchange_token', shortTokenAfterLogin);

      return this.http
        .get(`${API.host}/oauth/access_token`, { params })
        .pipe(catchError(this.formatErrors))
        .toPromise()
        .then((response: any) => {
          this.saveToken(response.access_token, response.expires_in);
          return response.access_token;
        });
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
}
