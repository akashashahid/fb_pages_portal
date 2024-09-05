import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtService } from '../jwt/jwt.service';

const API = environment.api;


@Injectable({
  providedIn: 'root',
})
export class FacebookConversationsService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}

  /**
   * Fetches conversations for a given page token.
   */
    private getConversations(pageToken: string) {
      return this.http
        .get(`${API.host}/me/conversations`, {
          params: new HttpParams().set('access_token', pageToken),
        })
        .pipe(catchError(this.jwtService.formatErrors));
    }
  
    /**
     * Fetches messages for a given conversation ID.
     */
    private getMessages(conversationId: string, pageToken: string) {
      return this.http
        .get(`${API.host}/${conversationId}/messages`, {
          params: new HttpParams().set('access_token', pageToken).set('fields', 'message,created_time,from'),
        })
        .pipe(catchError(this.jwtService.formatErrors));
    }
  
    public sendMessage(conversation_id: string, page_id: string, message: string) {
      const page_token = this.getPageToken(page_id);

      // Construct the body as URL-encoded format
      const body = new URLSearchParams();
      body.set('recipient', JSON.stringify({ id: conversation_id }));
      body.set('message', JSON.stringify({ text: message }));
      body.set('access_token', page_token);
      body.set('messaging_type', "MESSAGE_TAG");
      body.set('tag', "POST_PURCHASE_UPDATE");

      return this.http
        .post(
          `${API.host}/${page_id}/messages`,
          body.toString(),
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded'
            })
          }
        )
        .pipe(
          catchError((error) => {
            this.jwtService.formatErrors(error);
            return [];
          })
        )
        .toPromise()
        .then(() => true)
        .catch(() => false);
  
    }

    /**
     * This method will return pages without names, conversations without names,
     * and messages in each conversation.
     */
    public getAllConversationsAndMessages(page_id) {
      var page_token = this.getPageToken(page_id);
      return new Promise((resolve, reject) => {
        return this.getConversations(page_token).toPromise().then(
          (conversations: any) => {
            const result = {
              conversations: [] as any[],
              messages: [] as any[],
            };
            const conversationPromises = conversations.data.map((conversation: any) => {
              result.conversations.push({ id: conversation.id, page_id: page_id });

              return this.getMessages(conversation.id, page_token).toPromise().then(
                (messages: any) => {
                  result.messages.push({ conversationId: conversation.id, messages: messages.data.reverse() });
                }
              );
            });
            // Wait for all conversation promises to resolve
            return Promise.all(conversationPromises)
              .then(() => resolve(result))
              .catch(error => {reject(error)});
          }
        ),error => {console.log('we here')}}
      );
    }

    /**
     * This method will return pages without names, conversations without names,
     * and messages in each conversation.
     */
     public getAllPages() {
      return new Promise((resolve, reject) => {
        // Call the function to fetch all valid tokens and page data
        this.getAllPageTokens().then(
          (allPageTokens: any[]) => {
            resolve(allPageTokens.map(
              tokenObj => { 
                return {id: Object.keys(tokenObj)[0] } 
              })
            );
          },
          error => reject(error)
        );
      });
    }

    public getAllPageTokens() {
      return new Promise((resolve, reject) => {
        // Call the function to fetch all valid tokens and page data
        this.jwtService.cacheAllPageTokens().then(
          (allTokens) => resolve(allTokens)
        ),
        error => reject(error)
      });
    }

    private getPageToken(page_id) {
      return this.jwtService.getPageToken(page_id);
    }
}
  
