import { Component, OnInit } from '@angular/core';
import { Credential } from '../../../modules/auth';

import { Store } from '@ngrx/store';
import { AuthLoginAction } from '../../../modules/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credential: Credential = { username: '', password: ''};
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new AuthLoginAction(this.credential));
  }

}
