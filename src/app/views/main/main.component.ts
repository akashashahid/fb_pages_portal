import { Component, Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root',
})

export class MainComponent {
  newMessage: string = '';
  pages: any[] = [];
  conversations: any[] = [];
  shortLiveToken: any;
  currentPage: any = null;
  openChats: { [key: string]: boolean } = {};
  selectedConversation: any = null;
  constructor(private fbConversationsService: FacebookConversationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentPage = params.get('id');
    });

    this.route.queryParams.subscribe(params => {
      if (params['access_token']) {
        this.shortLiveToken = params['access_token'];
      }
      this.fetchFacebookData();
    });
  }

  fetchFacebookData() {
    this.fbConversationsService.getAllConversationsAndMessages(this.shortLiveToken)
      .then((result: any) => {
        this.pages = result.pages;
        this.conversations = result.conversations.map(conversation => ({
          ...conversation,
          messages: result.messages.filter(msg => msg.conversationId === conversation.id)
        }));
      })
      .catch(error => console.error('Error fetching data:', error));
  }


  toggleChat(conversationId: string) {
    this.openChats[conversationId] = !this.openChats[conversationId];
  }

  isChatOpen(conversationId: string): boolean {
    return this.openChats[conversationId];
  }

  calculateChatboxPosition(index: number): object {
    return {
      right: `${20 + index * 310}px`, // Adjust 310 based on your chatbox width + margin
      bottom: '0px'
    };
  }

  sendMessage(conversationId, message) {
    this.fbConversationsService.sendMessage(conversationId, message, this.shortLiveToken)
      .then(response => {
        console.log('Message sent successfully:', response);
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
  }
  
}
