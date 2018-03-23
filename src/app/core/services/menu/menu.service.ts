import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { share } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Menu } from './interfaces';

@Injectable()
export class MenuService implements OnDestroy {
  private change$ = new BehaviorSubject<Menu[]>(null);
  private data: Menu[];

  constructor(
  ) { }

  get menu() {
    return this.data;
  }

  get change(): Observable<Menu[]> {
    return this.change$.pipe(share());
  }

  setMenu(menu: Menu[]) {
    this.data = menu;
    this.change$.next(this.data);
  }

  ngOnDestroy() {
    this.change$.unsubscribe();
  }
}
