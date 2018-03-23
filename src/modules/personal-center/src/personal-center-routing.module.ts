import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalCenterComponent } from './personal-center.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '个人中心',
    },
    component: PersonalCenterComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full',
      },
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        data: {title: '账户'},
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalCenterRoutingModule { }
