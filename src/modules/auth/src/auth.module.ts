import { NgModule, ModuleWithProviders } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './state';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([fromAuth.AuthEffects]),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class AuthModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
      ]
    };
  }
}
