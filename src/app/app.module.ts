import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '../modules/auth';
import { AppStoreModule } from './app-store.module';
import { CoreModule } from './core';
import { ACLModule } from '../packages/acl';
import { LayoutModule } from '../packages/layout';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterComponent } from './components/router/router.component';
import { IndexComponent } from './components/index/index.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { StartupService } from './core/services/startup/startup.service';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    RouterComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppStoreModule,

    CoreModule,
    ACLModule.forRoot(),
    LayoutModule,

    AuthModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
