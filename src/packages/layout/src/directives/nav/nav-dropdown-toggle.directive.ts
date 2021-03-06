import { Directive, HostListener } from '@angular/core';
import { NavDropdownDirective } from './nav-dropdown.directive';

@Directive({ selector: '[appNavDropdownToggle]' })
export class NavDropdownToggleDirective {
  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
  constructor(private dropdown: NavDropdownDirective) { }
}
