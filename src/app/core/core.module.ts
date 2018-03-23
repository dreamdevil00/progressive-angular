import { NgModule, SkipSelf, Optional } from '@angular/core';

import { StartupService } from './services/startup/startup.service';
import { MenuService } from './services/menu/index';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    StartupService,
    MenuService,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule 只能在根模块中加载！`);
    }
  }
}
