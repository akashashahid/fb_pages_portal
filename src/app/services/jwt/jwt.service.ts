import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { TranslatePipe } from 'src/app/pipes/translate/translate.pipe';
import { throwError } from 'rxjs';
import * as XLSX from 'xlsx';

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
  private REDIRECT_URI = `${window.location.origin}/callback`; 
  private STATE = 'randomlyGeneratedString';
  private allPageTokens = {};

  constructor(private translate: TranslatePipe, private http: HttpClient) {}

  getAllValidTokens(): any {
    return new Promise((resolve, reject) => {
      var allValidTokens = [];

      fetch('assets/tokens.xlsx')
      .then(response => response.arrayBuffer())
      .then(buffer => {
        const wb: XLSX.WorkBook = XLSX.read(buffer, { type: 'array' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        allValidTokens = data.map(row => {
          if (!this.isTokenExpired(row['tokenExpiry'])) { 
            return {
              longToken: row['longToken'],
              tokenExpiry: row['tokenExpiry']
            };
          }
        });
        resolve(allValidTokens);
      });
    });
  }

  redirectToFacebookLogin() {
    const fbOAuthUrl = `https://www.facebook.com/v20.0/dialog/oauth?response_type=token&client_id=${API.appId}&redirect_uri=${this.REDIRECT_URI}&auth_type=rerequest&scope=${API.scope}`;
    window.location.href = fbOAuthUrl;
  }
  // Save the token and its expiry time in memory
  saveToken(user: string, token: string, expiresIn: number) {
    const userEmail = user;  
    const userAccessToken = token;  
    const expiryDate = expiresIn;  

    const reader: FileReader = new FileReader();

    fetch('assets/tokens.xlsx')
      .then(response => response.arrayBuffer())
      .then(buffer => {
        // Parse the buffer into a workbook
        const wb: XLSX.WorkBook = XLSX.read(buffer, { type: 'array' });

        // Access the first worksheet
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        // Convert the worksheet to JSON format for easier manipulation
        const data: any[] = XLSX.utils.sheet_to_json(ws);

        // Check if the user ID already exists
        const existingRow = data.find(row => row['userEmail'] === userEmail);
        if (existingRow) {
          // Update the existing row
          existingRow['longToken'] = userAccessToken;
          existingRow['tokenExpiry'] = expiryDate;
        } else {
          // Add a new row with user ID, access token, and expiry date
          data.push({ userEmail: userEmail, longToken: userAccessToken, tokenExpiry: expiryDate });
        }
      });
    if (!token) {
      throw new Error(
        this.translate.transform('generic[responses][error][token][002]')
      );
    }
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("tokenExpiry", JSON.stringify(Date.now() + 59 * 24 * 60 * 60 * 1000));
  }

  // Check if the token is expired
  isTokenExpired(tokenExpiry): boolean {
    return tokenExpiry < Date.now();
  }

  // Fetch a long-lived user token, renewing it if expired
  // public getLongLiveUserToken(shortTokenAfterLogin): Promise<string> {
  //   if(shortTokenAfterLogin) {
  //     let params = new HttpParams()
  //       .set('grant_type', 'fb_exchange_token')
  //       .set('client_id', API.appId)
  //       .set('client_secret', API.appSecret)
  //       .set('scope', API.scope)
  //       .set('fb_exchange_token', shortTokenAfterLogin);

  //     return this.http
  //       .get(`${API.host}/oauth/access_token`, { params })
  //       .pipe(catchError(this.formatErrors))
  //       .toPromise()
  //       .then((response: any) => {
  //         this.saveToken(response.access_token, response.expires_in);
  //         return response.access_token;
  //       });
  //   } else if (!this.getToken()) {
  //     this.redirectToFacebookLogin();
  //   } else {
  //     return Promise.resolve(this.token);
  //   }
  // }

  // Fetch page tokens using the long-lived user token
  cacheAllPageTokens() {
    return new Promise((resolve, reject) => {
      this.getAllValidTokens().then(allValidTokens => {
        const pageTokensRequests = allValidTokens.map(tokenObj => {
          return this.http.get(`${API.host}/me/accounts`, {
            params: new HttpParams().set('access_token', tokenObj.longToken),
          }).toPromise();
        });
        Promise.all(pageTokensRequests)
          .then(results => {
            // Results will be an array of responses from the API for each token
            let allTokens = results.reduce((acc: any[], response: any) => {
              const tokens = response.data.map((page: any) => {
                  // Store each access_token in localStorage with id as the key
                  localStorage.setItem(page.id, page.access_token);
                  return {
                      [page.id]: page.access_token
                  };
              });
              return acc.concat(tokens);
            }, []);
            resolve(allTokens); // Resolve the final promise with allPageTokens
          })
          .catch(error => {
            console.error('Error fetching page tokens:', error);
            reject(error); // Reject the promise if any request fails
          });
      }).catch(error => {
        console.error('Error fetching valid tokens:', error);
        reject(error); // Reject if getAllValidTokens fails
      });
    });
  }

  // Fetch page tokens using the long-lived user token
  getPageToken(page_id) {
    return localStorage.getItem(page_id);
  }


  // Format errors
  public formatErrors(error: any) {
    return throwError(error.error);
  }
}
