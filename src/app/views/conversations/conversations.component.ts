import EmojiButton from 'emoji-button';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('messageContainer') private messageContainer: ElementRef;
  page_id : String;
  pages: any[] = [];
  conversations: any[] = [];
  shortLiveToken: String;
  selectedConversation: any;
  selected_psid: any;
  selectedTab: string = 'chat';
  notes: string = '';
  newMessage: String;
  allLabels: any[] = [];
  selectedFile: File = null;
  
  constructor(private fbConversationsService: FacebookConversationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.page_id = params.get('id');
    this.displayConversations('');
    this.getAllLabels();
    // Poll for new messages every 5 seconds (5000 ms)
    setInterval(() => {
      if(this.selectedConversation) {
        this.fbConversationsService.getMessages(this.selectedConversation.id, this.page_id).then(
          (messages: any) => {
            this.selectedConversation.messages[0].messages = messages.reverse();
          }
        );
       
      }
      }, 5000);
    });
  }

  showEmojiPicker(el) {
    const picker = new EmojiButton();
    console.log('zarah')
    console.log(el);
    picker.showPicker(el);
    
    picker.on('emoji', (emoji: string) => {
      if (this.newMessage) {
        this.newMessage += emoji;
      }
    });
  }

  displayConversations(filter) {
    this.fbConversationsService.getAllConversationsAndMessages(this.page_id, filter)
      .then((result: any) => {
        console.log(result)
        this.conversations = result.conversations.map(conversation => ({
          ...conversation,
          messages: result.messages.filter(msg => msg.conversationId === conversation.id),
          labels: result.labels.filter(msg => msg.conversationId === conversation.id),
          images: result.images.filter(msg => msg.conversationId === conversation.id)

        }));

        if(filter) {
          this.conversations = this.conversations.filter(conversation => 
            conversation.labels[0].labels.some(label => 
              label.page_label_name === filter 
              || filter == 'unread' && conversation.unread_count
              || filter == 'done' && conversation.not_done
              || filter == 'spam' && conversation.not_spam
            )
          );
        }

        console.log(this.conversations)
      })
    
      .catch(error => console.error('Error fetching data:', error));
  }

  sendMessage(message) {
    if(!message) {return;}
    this.fbConversationsService.sendMessage(this.selected_psid, this.page_id, message)
      .then((result: any) => {
        let new_message = {
          'created_time': Date.now(),
          'from': {
              'id': this.page_id
          },
          'message': message
        }
        this.selectedConversation.messages[0].messages.push(new_message);
        this.newMessage = '';
        this.scrollToBottom();
      })
    
      .catch(error => console.error('Error fetching data:', error));
  }

  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
    this.selected_psid = conversation.user_psid;
    this.scrollToBottom();
  }

  // Handle file selection
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    this.sendAttachment();
  }
  // Send attachment
  sendAttachment() {
    const formData = new FormData();
    formData.append('recipient', JSON.stringify({ id: this.selected_psid }));
    formData.append('message', JSON.stringify({ attachment: { type: 'file', payload: { is_reusable: true } } }));
    formData.append('filedata', this.selectedFile);

    this.fbConversationsService.sendAttachment(this.selected_psid, this.page_id, this.selectedFile)
      .then((result: any) => {
        // Handle successful attachment sending
        console.log('Attachment sent:', result);
        this.selectedFile = null;
        this.scrollToBottom();
      })
      .catch(error => console.error('Error sending attachment:', error));
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  filterUnread() {
    this.displayConversations('unread');
  }

  markAsUnread() {
    this.setLabel('unread');
  }

  filterImportant() {
    this.displayConversations('! Important');
  }

  markAsImportant() {
    this.setLabel('! Important');
  }

  filterDone() {
    this.displayConversations('done');
  }

  moveToDone() {
    this.setLabel('done');
  }

  filterFollowup() {
    this.displayConversations('followup');
  }

  markAsFollowup() {
    this.setLabel('followup');
  }

  filterLabels(label) {
    this.displayConversations(label);
  }

  filterSpam() {
    this.displayConversations('spam');
  }

  moveToSpam() {
    this.setLabel('spam');
  }

  showResponses() {
    // Implement logic to show conversations needing a response
    this.conversations = this.conversations.filter(conversation => conversation.needsResponse);
  }

  showLabels() {
    this.fbConversationsService.getLabels(this.selected_psid  , this.page_id).then(
      (labels: any) => {
        this.allLabels = labels.data;
      }
    )
  }

  removeLabel(label) {
    let label_id = this.getLabelId(label);
    this.fbConversationsService.removeLabel(this.selected_psid, this.page_id, label_id).then(
      (labels: any) => {
        this.allLabels = labels.data;
      }
    )
  }

  saveNotes() {
    // Implement saving logic
    console.log('Notes saved:', this.notes);
  }
  setLabel(label) {
    let label_id = this.getLabelId(label);
    this.fbConversationsService.setLabel(this.selected_psid, this.page_id, label_id)
      .then((result: any) => {
        if(result.success) {

        }
      })
    
      .catch(error => console.error('Error fetching data:', error));
  }

  getAllLabels() {
    this.fbConversationsService.getLabels(this.page_id, this.page_id).then(
      (labels: any) => {
        this.allLabels = labels.data;
      }
    )
  }

  getLabelId(labelName) {
    const label = this.allLabels.find(label => label.page_label_name === labelName);
    return label ? label.id : null;
}

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
      }, 0);
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }
}

