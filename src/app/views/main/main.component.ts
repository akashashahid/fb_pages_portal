import { Component } from '@angular/core';
import { FacebookConversationsService } from 'src/app/services/facebook-conversations/facebook-conversations.service';
import { ActivatedRoute } from '@angular/router';

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
  currentPage: any = null;
  selectedConversation: any;

  
  constructor(private fbConversationsService: FacebookConversationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentPage = params.get('id');
    });

    this.route.queryParams.subscribe(params => {
      if (params['access_token']) {
        this.fetchFacebookData(params['access_token']);
      } else {
        this.fetchFacebookData();
      }
    });
  }

  fetchFacebookData(shortLiveToken: any = '') {
    this.fbConversationsService.getAllConversationsAndMessages()
      .then((result: any) => {
        this.pages = result.pages;
        this.conversations = result.conversations.map(conversation => ({
          ...conversation,
          messages: result.messages.filter(msg => msg.conversationId === conversation.id)

        }));
      })
    
      .catch(error => console.error('Error fetching data:', error));
  }

  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
  }
}

