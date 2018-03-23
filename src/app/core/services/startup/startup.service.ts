import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

// import { MenuService } from '../menu';
import { Store } from '@ngrx/store';
import { LayoutUpdateSidebarAction } from '../../../../packages/layout';

@Injectable()
export class StartupService {

  constructor(
    private http: HttpClient,
    private store: Store<any>,
 //   private menuSrv: MenuService,
  ) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('assets/app-data.json')
        .pipe(
          catchError((error) => {
            resolve(null);
            return of(error);
          })
        ).subscribe((appData) => {
          const menu = appData.menu;
          console.log('menu:', menu);
          this.store.dispatch(new LayoutUpdateSidebarAction(menu));
        },
        () => {},
        () => {
          resolve(null);
        });
    });
  }
}
