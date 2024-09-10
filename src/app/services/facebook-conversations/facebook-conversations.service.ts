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
    private getConversations(pageToken: string,filter) {
      let params = new HttpParams().set('access_token', pageToken).set('fields', 'participants');
      if(filter == 'unread') {
        params = params.set('fields', params.get('fields') + ',unread_count')
      } else if(filter == 'done') {
        params = params.set('folder', 'page_done')
      } else if(filter == 'spam') {
        params = params.set('folder', 'other')
      }
      return this.http
        .get(`${API.host}/me/conversations`, {
          params: params,
        })
        .pipe(catchError(this.jwtService.formatErrors));
    }
  
    /**
     * Fetches messages for a given conversation ID.
     */
     public getMessages(conversationId: string, page_id) {
      const page_token = this.getPageToken(page_id);
      const fetchMessages = (url: string, accumulatedMessages: any[] = []) => {
        return this.http
          .get(url, {
            params: new HttpParams().set('access_token', page_token).set('fields', 'message,created_time,from,tags,attachments').set('limit', '100'), // Set the limit (e.g., 100)
          })
          .pipe(catchError(this.jwtService.formatErrors))
          .toPromise()
          .then((response: any) => {
            const messages = accumulatedMessages.concat(response.data); // Accumulate messages
            const next = response.paging?.next; // Check for next page
            
            if (next) {
              return fetchMessages(next, messages); // Recursively fetch the next page
            } else {
              return messages; // Return all messages when done
            }
          });
      };
    
      return new Promise((resolve, reject) => {
        const initialUrl = `${API.host}/${conversationId}/messages`;
        fetchMessages(initialUrl)
          .then(resolve)
          .catch(reject);
      });
    }

      /**
   * Fetches labels for a given PSID.
   */
    public getLabels(psid, page_id) {
      const page_token = this.getPageToken(page_id);
      return new Promise((resolve, reject) => {
        return this.http
          .get(`${API.host}/${psid}/custom_labels`, {
            params: new HttpParams().set('access_token', page_token).set('fields', 'page_label_name'),
          })
          .pipe(catchError(this.jwtService.formatErrors))
          .toPromise().then(
            (labels: any) => {
              resolve(labels);
            }
          ).catch(() => resolve({'data' : []}));;
      });
    }
  
    /**
   * Removes labels for a given PSID.
   */
    public removeLabel(psid, page_id, label_id) {
      const page_token = this.getPageToken(page_id);
      return new Promise((resolve, reject) => {
        return this.http
          .delete(`${API.host}/${label_id}/label`, {
            params: new HttpParams().set('access_token', page_token).set('user', psid),
          })
          .pipe(catchError(this.jwtService.formatErrors))
          .toPromise().then(
            (response: any) => {
              resolve(response);
            }
          ).catch(() => resolve({'data' : []}));;
      });
    }
  
    public setLabel(psid: string, page_id , label_id: string) {
      const page_token = this.getPageToken(page_id);

      // Construct the body as URL-encoded format
      const body = new URLSearchParams();
      body.set('user', psid);
      body.set('access_token', page_token);

      return new Promise((resolve, reject) => {
        return this.http
          .post(
            `${API.host}/${label_id}/label`,
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
          .then((response) => resolve(response))
          .catch(() => false);
      })
    }

    public sendAttachment(psid, page_id, file: any): Promise<any> {
      const page_token = this.getPageToken(page_id);
      const formData = new FormData();
      formData.append('recipient', JSON.stringify({ id: psid }));
      formData.append('message', JSON.stringify({ attachment: { type: 'image', payload: { is_reusable: true } } }));
      formData.append('access_token', page_token);
      formData.append('filedata', file);

      return new Promise((resolve, reject) => {
        return this.http
          .post(
            `${API.host}/${page_id}/message_attachments`,
            formData,
          )
          .pipe(
            catchError((error) => {
              this.jwtService.formatErrors(error);
              return [];
            })
          )
          .toPromise()
          .then((response) => {
            const body = new URLSearchParams();
            body.set('recipient', JSON.stringify({ id: psid }));
            body.set('message', JSON.stringify({ attachment: { type: 'image', payload: { attachment_id: response.attachment_id }}}));
            body.set('access_token', page_token);
            body.set('messaging_type', "MESSAGE_TAG");
            body.set('tag', "POST_PURCHASE_UPDATE");
            return new Promise((resolve, reject) => {
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
                .then((response) => resolve(response))
                .catch(() => false);
            })
          })
          .catch(() => false);
      })
    }

    public sendMessage(psid, page_id, message) {
      const page_token = this.getPageToken(page_id);

      // Construct the body as URL-encoded format
      const body = new URLSearchParams();
      body.set('recipient', JSON.stringify({ id: psid }));
      body.set('message', JSON.stringify({ text: message }));
      body.set('access_token', page_token);
      body.set('messaging_type', "MESSAGE_TAG");
      body.set('tag', "POST_PURCHASE_UPDATE");
      return new Promise((resolve, reject) => {
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
          .then((response) => resolve(response))
          .catch(() => false);
      })
  
    }

    /**
     * This method will return pages without names, conversations without names,
     * and messages in each conversation.
     */
    public getAllConversationsAndMessages(page_id, filter) {
      var page_token = this.getPageToken(page_id);
      return new Promise((resolve, reject) => {
        return this.getConversations(page_token, filter).toPromise().then(
          (conversations: any) => {
            const result = {
              conversations: [] as any[],
              messages: [] as any[],
              labels: [] as any[],
              images: [] as any[]
            };
            const conversationPromises = conversations.data.map((conversation: any) => {

              let user_psid = conversation.participants.data.find(function(user) {
                return user.id !== conversation.page_id;
              })?.id;
              let conversation_obj = { id: conversation.id, page_id: page_id, user_psid: user_psid, unread_count: conversation.unread_count };
              if(filter == 'done') {
                conversation_obj['not_done'] = 1;
              } else if(filter == 'spam'){
                conversation_obj['not_spam'] = 1;
              }
              result.conversations.push(conversation_obj);

              return this.getMessages(conversation.id, page_id).then(
                (messages: any) => {
                  result.messages.push({ conversationId: conversation.id, messages: messages.reverse() });
                  let images = [];
                  messages.forEach(message => {
                    if (message.attachments && message.attachments.data.length > 0) {
                      message.attachments.data.forEach(attachment => {
                        if (attachment.mime_type.startsWith('image/')) {
                          images.push(attachment.file_url || attachment.image_data?.url);
                        }
                      });
                    }
                  });

                  result.images.push({ conversationId: conversation.id, images:images });
                  return this.getLabels(user_psid, page_id).then(
                    (labels: any) => {
                      result.labels.push({ conversationId: conversation.id, labels: labels.data });
                    }
                  )
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
  
