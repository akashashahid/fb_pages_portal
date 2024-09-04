import { HttpClient, HttpParams } from '@angular/common/http';
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
          params: new HttpParams().set('access_token', pageToken).set('fields', 'message,created_time,created_by'),
        })
        .pipe(catchError(this.jwtService.formatErrors));
    }
  
    /**
     * This method will return pages without names, conversations without names,
     * and messages in each conversation.
     */
     public getAllConversationsAndMessages() {
      return new Promise((resolve, reject) => {
        // Call the function to fetch all valid tokens and page data
        this.jwtService.fetchAllPageTokens().then(
          (allPageTokens: any[]) => {
            const result = {
              pages: [] as any[],
              conversations: [] as any[],
              messages: [] as any[],
            };
    
            // Process each page token
            const pagePromises = allPageTokens.map((pageData: any) => {
              result.pages.push({ id: pageData.id });
    
              return this.getConversations(pageData.access_token).toPromise().then(
                (conversations: any) => {
                  const conversationPromises = conversations.data.map((conversation: any) => {
                    result.conversations.push({ id: conversation.id, page_id: pageData.id });
    
                    return this.getMessages(conversation.id, pageData.access_token).toPromise().then(
                      (messages: any) => {
                        result.messages.push({ conversationId: conversation.id, messages: messages.data });
                      }
                    );
                  });
                  // Wait for all conversation promises to resolve
                  return Promise.all(conversationPromises);
                }
              );
            });
    
            // Wait for all page promises to resolve
            Promise.all(pagePromises)
              .then(() => resolve(result))
              .catch(error => reject(error));
          },
          error => reject(error)
        );
      });
    }
}
  
