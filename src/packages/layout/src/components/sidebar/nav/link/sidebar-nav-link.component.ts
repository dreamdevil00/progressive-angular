import { Component, OnInit, Input } from '@angular/core';

import { Menu } from '../../../../../../shared';

@Component({
  selector: 'app-sidebar-nav-link',
  templateUrl: './sidebar-nav-link.component.html'
})

export class SidebarNavLinkComponent implements OnInit {
  @Input() menu: Menu;
  constructor() { }

  ngOnInit() { }

  public hasBadge() {
    return this.menu.badge ? true : false;
  }

  public hasIcon() {
    return this.menu.icon ? true : false;
  }

  public hasExternalLink() {
    return this.menu.externalLink ? true : false;
  }
}
