import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookConversationsService } from 'src/app/services/facebook-conversations/facebook-conversations.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';

/**
 * This component is rendered on the initialization of the application.
 */
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  pages: any[] = [];
  conversations: any[] = [];
  shortLiveToken: String;
  constructor(private fbConversationsService: FacebookConversationsService, private jwt: JwtService) {}

  ngOnInit(): void {
    if(window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
      let shortLiveToken = urlParams.get('access_token');
      this.fetchFacebookData(shortLiveToken);
    } else {
      this.fetchFacebookData();
    }
  }

  fetchFacebookData(shortLiveToken: any = '') {
    this.fbConversationsService.getAllConversationsAndMessages(shortLiveToken)
      .then((result: any) => {
        this.pages = result.pages;
        this.conversations = result.conversations.map(conversation => ({
          ...conversation,
          messages: result.messages.filter(msg => msg.conversationId === conversation.id)
        }));
      })
      .catch(error => console.error('Error fetching data:', error));
  }

}
