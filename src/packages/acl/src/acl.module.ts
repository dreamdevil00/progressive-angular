import { NgModule, ModuleWithProviders } from '@angular/core';

import { ACLDirective } from './directives/acl.directive';
import { ACLService } from './services/acl.service';

@NgModule({
  imports: [],
  exports: [ACLDirective],
  declarations: [ACLDirective],
  providers: []
})
export class ACLModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ACLModule,
      providers: [ACLService]
    };
  }
}
