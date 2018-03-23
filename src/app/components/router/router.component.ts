import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AuthState, selectAuthLogin } from '../../../modules/auth';
import * as fromApp from '../../state';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-router',
  template: '重定向中...'
})

export class RouterComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  constructor(private store: Store<AuthState>) {
  }

  ngOnInit() {
    console.log('router component init');
    this.sub = this.store
      .pipe(select(selectAuthLogin))
      .subscribe((res) => {
        console.log('islogged:', res);
        const action = res ? fromApp.AppRedirectIndexAction : fromApp.AppRedirectLoginAction;
        this.store.dispatch(new action(null));
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
