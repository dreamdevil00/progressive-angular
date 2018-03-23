import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

import { Menu } from '../../../../../../shared';

@Component({
  selector: 'app-sidebar-nav-title',
  templateUrl: './sidebar-nav-title.component.html'
})

export class SidebarNavTitleComponent implements OnInit {
  @Input() menu: Menu;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    const nativeElement = this.el.nativeElement;
    const li = this.renderer.createElement('li');
    const name = this.renderer.createText(this.menu.text);
    this.renderer.addClass(li, 'nav-title');

    this.renderer.appendChild(nativeElement, li);
  }
}
