import { Component } from '@angular/core';
import { Router } from '@angular/router';
/**
* @ignore
*/
@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
* @ignore
*/
export class AppComponent {
  title = 'app';
  constructor(private router: Router) { }
  ngOnInit() {
    if (window.location.hash && window.location.hash.includes('access_token')) {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');

      if (accessToken) {
        this.router.navigate([window.location.pathname], { queryParams: { access_token: accessToken } });
      } else {
        console.error('Access token not found in URL hash');
      }
    }
  }
}
