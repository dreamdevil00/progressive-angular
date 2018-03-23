import { Injectable } from '@angular/core';

import { Credential } from './interfaces';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
@Injectable()
export class AuthService {

  constructor() { }

  login(cre: Credential): Observable<any> {
    console.log('cre:', cre);
    if (cre.username === 'test' && cre.password === 'test') {
      return of({ id: 'foo', token: 'token' });
    } else {
      return _throw({msg: 'login failed'});
    }
  }
}
