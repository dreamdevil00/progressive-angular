import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../../../../../shared';

@Component({
  selector: 'app-sidebar-nav-item',
  templateUrl: './sidebar-nav-item.component.html'
})

export class SidebarNavItemComponent implements OnInit {
  @Input() item: Menu;
  constructor(private router: Router) { }

  ngOnInit() { }

  public isDropdown() {
    return this.item.children ? true : false;
  }

  public isActive() {
    const url = this.item.link ? this.item.link : this.item.externalLink;
    return this.router.isActive(url, false);
  }
}
