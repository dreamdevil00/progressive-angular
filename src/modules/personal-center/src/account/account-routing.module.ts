import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './components/account.component';
import { AccountProfileComponent } from './components/account-profile.component';

const routes: Routes = [
  { path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full'},
      {
        path: 'profile',
        component: AccountProfileComponent,
        data: { title: '概览'},
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }

export const routedComponents = [AccountComponent];
