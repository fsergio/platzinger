import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(protected router: Router,
              protected route: ActivatedRoute) {

  }

  goToConversation() {
    this.router.navigate(['/conversation']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
