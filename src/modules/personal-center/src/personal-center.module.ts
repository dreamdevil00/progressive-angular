import { NgModule } from '@angular/core';
import { PersonalCenterRoutingModule } from './personal-center-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonalCenterComponent } from './personal-center.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonalCenterRoutingModule,
  ],
  exports: [],
  declarations: [PersonalCenterComponent],
  providers: [
  ],
})
export class PersonalCenterModule { }
