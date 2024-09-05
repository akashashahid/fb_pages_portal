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
    // this.route.queryParams.subscribe(params => {
    //   if (params['access_token']) {
    //     window.history.replaceState(null, null, window.location.href.replace(window.location.hash, ''));
    //     this.displayPages(params['access_token']);
    //   } else {
        this.displayPages();
    //   }
    // });
  }

  displayPages() {
    this.fbConversationsService.getAllPages()
      .then((pages: any) => {
        this.pages = pages;
      })
      .catch(error => console.error('Error getting pages:', error));
  }
}

