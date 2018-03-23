import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';


import { AccountComponent } from './components/account.component';
import { AccountProfileComponent } from './components/account-profile.component';

import { AccountService } from './account.service';

const components = [
  AccountComponent,
  AccountProfileComponent,
];

@NgModule({
  imports: [
    AccountRoutingModule,
    CommonModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [
    AccountService,
  ],
})
export class AccountModule { }
