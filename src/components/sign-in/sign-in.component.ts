import { Component, OnInit } from '@angular/core';

// Import the User model

import { User } from '../../classes/user/User';
 
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  private user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User({
      email: '',
      password: '',
    })
  }
}
