import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../../../../shared';

@Component({
  selector: 'app-sidebar-nav-dropdown',
  templateUrl: './sidebar-nav-dropdown.component.html'
})

export class SidebarNavDropdownComponent implements OnInit {
  @Input() menu: Menu;
  constructor() { }

  ngOnInit() { }

  public hasBadge() {
    return this.menu.badge ? true : false;
  }

  public hasIcon() {
    return this.menu.icon ? true : false;
  }
}
