import { Directive, Input, Renderer2, OnDestroy, ElementRef } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ACLService } from '../services/acl.service';

@Directive({ selector: '[acl]' })
export class ACLDirective implements OnDestroy {

  private change$: Subscription;
  private preveligedRoles: string[] | string;

  @Input('acl')
  set acl(value: string | string[]) {
    this.preveligedRoles = value;
    this.toggle(value);
  }
  constructor(
    private aclService: ACLService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {
    this.change$ = this.aclService.change.subscribe((roles) => {
      this.toggle(this.preveligedRoles);
    });
  }

  ngOnDestroy() {
    this.change$.unsubscribe();
  }

  private toggle(value: string | string[]) {
    const CLS = 'acl_hide';
    const el = this.el.nativeElement;
    if (this.aclService.can(value)) {
      this.renderer.removeClass(el, CLS);
    } else {
      this.renderer.addClass(el, CLS);
    }
  }
}
