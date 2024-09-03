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
    private getConversations() {
      const url = `${API.host}/me/conversations`;
      return this.jwtService.get(url);
    }
  
    /**
     * Fetches messages for a given conversation ID.
     */
    private getMessages(conversationId: string) {
      const url = `${API.host}/${conversationId}/messages`;
      const params = new HttpParams().set('fields', 'message,created_time');
      return this.jwtService.get(url, params);
    }
  
    /**
     * Sends a message to a specific conversation.
     */
    public sendMessage(conversationId: string, message: string, shortLiveToken?: string) {
      const url = `${API.host}/${conversationId}/messages`;
      const body = { message };
      return this.jwtService.post(url, body, shortLiveToken);
    }
  
    /**
     * This method will return pages without names, conversations without names,
     * and messages in each conversation.
     */
    public getAllConversationsAndMessages(shortLiveToken?: string) {
      return new Promise((resolve, reject) => {
        this.jwtService.getLongLiveUserToken(shortLiveToken).then(
          (tokenData: any) => {
            this.jwtService.getPageTokens(tokenData).toPromise().then(
              (pages: any) => {
                const result = {
                  pages: [] as any[],
                  conversations: [] as any[],
                  messages: [] as any[],
                };
    
                const pagePromises = pages.data.map((page: any) => {
                  result.pages.push({ id: page.id });
    
                  return this.getConversations().then(
                    (conversations: any) => {
                      const conversationPromises = conversations.data.map((conversation: any) => {
                        result.conversations.push({ id: conversation.id, page_id: page.id });
    
                        return this.getMessages(conversation.id).then(
                          (messages: any) => {
                            result.messages.push({ conversationId: conversation.id, messages: messages.data });
                          }
                        );
                      });
                      return Promise.all(conversationPromises);
                    }
                  );
                });
    
                Promise.all(pagePromises)
                  .then(() => resolve(result))
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
  
