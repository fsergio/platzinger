import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(protected router: Router,
              protected route: ActivatedRoute,
              protected location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
