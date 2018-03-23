import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { select, Store } from '@ngrx/store';
import { selectSidebarNav } from '../../../state';

import { Menu } from '../../../../../shared';

import { appData } from '../_nav';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html'
})
export class SidebarNavComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public sidebarNav: Menu[] = [];
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.sidebarNav = appData.menu.children;
  /*  this.sub = this.store
      .pipe(select(selectSidebarNav))
      .subscribe(res => (this.sidebarNav = res)); */
  }

  ngOnDestroy() {
   // this.sub.unsubscribe();
  }

  public isTitle(item: Menu) {
    return !!item.title;
  }
}
