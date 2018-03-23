import { NgModule } from '@angular/core';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducer as authReducer } from '../modules/auth';
import { reducer as appReducer, AppEffects } from './state';

const reducers: ActionReducerMap<any> = {
  app: appReducer,
  auth: authReducer,
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class AppStoreModule { }
