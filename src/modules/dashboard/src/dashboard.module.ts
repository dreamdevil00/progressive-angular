import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashbord-routing.module';

import { DashboardComponent } from './components/dashboard.component';
import { AboutComponent } from './components/about.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
  ],
  exports: [],
  declarations: [
    DashboardComponent,
    AboutComponent
  ],
  providers: [],
})
export class DashboardModule { }
