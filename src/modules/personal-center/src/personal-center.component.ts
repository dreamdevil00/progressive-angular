import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-personalcenter-dashboard',
  template: `
    <router-outlet></router-outlet>
  `,
})

export class PersonalCenterComponent implements OnInit {

  constructor(
    private store: Store<any>,
  ) {
  }

  ngOnInit() {
  }
}
