import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterComponent } from './components/router/router.component';
import { IndexComponent } from './components/index/index.component';

import { SimpleLayoutComponent, FullLayoutComponent } from '../packages/layout';

const routes: Routes = [
 // { path: '', redirectTo: 'router', pathMatch: 'full' },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      { path: '', redirectTo: 'router', pathMatch: 'full' },
      { path: 'router', component: RouterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'not-found', component: PageNotFoundComponent }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: '../modules/dashboard/src/dashboard.module#DashboardModule' },
      { path: 'personal-center', loadChildren: '../modules/personal-center/src/personal-center.module#PersonalCenterModule'}
    ]
  },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];
