import { Component } from '@angular/core';
import { FacebookConversationsService } from 'src/app/services/facebook-conversations/facebook-conversations.service';
import { ActivatedRoute } from '@angular/router';

/**
 * This component is rendered on the initialization of the application.
 */
@Component({
  selector: "app-conversations",
  templateUrl: "./conversations.component.html",
  styleUrls: ["./conversations.component.scss"],
})
export class ConversationsComponent {
  pages: any[] = [];
  conversations: any[] = [];
  shortLiveToken: String;
  selectedConversation: any;
  selected_psid: any;
  selectedTab: string = 'chat';
  notes: string = '';
  
  constructor(private fbConversationsService: FacebookConversationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.displayConversations(params.get('id'));
    });
  }

  displayConversations(page_id: any = '') {
    this.fbConversationsService.getAllConversationsAndMessages(page_id)
      .then((result: any) => {
        this.conversations = result.conversations.map(conversation => ({
          ...conversation,
          messages: result.messages.filter(msg => msg.conversationId === conversation.id)

        }));
      })
    
      .catch(error => console.error('Error fetching data:', error));
  }

  sendMessage(conversation_id, page_id, message) {
    this.fbConversationsService.sendMessage(conversation_id, page_id, message)
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
    let messages = conversation.messages[0].messages;
    messages.some(function(message) {
      if (message.from.id !== conversation.page_id) {
        this.selected_psid = message.from.id;
        return true;
      }
    }, this);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }


  filterUnread() {
    // Implement filtering logic for unread conversations
    this.conversations = this.conversations.filter(conversation => !conversation.read);
  }

  showResponses() {
    // Implement logic to show conversations needing a response
    this.conversations = this.conversations.filter(conversation => conversation.needsResponse);
  }

  showLabels() {
    // Implement logic to show labels or categories (optional)
    console.log("Show labels logic here");
  }

  saveNotes() {
    // Implement saving logic
    console.log('Notes saved:', this.notes);
  }
}


