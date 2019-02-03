import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  constructor(protected router: Router,
              protected route: ActivatedRoute,
              protected location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
