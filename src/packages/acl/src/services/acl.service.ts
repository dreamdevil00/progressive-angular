import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Injectable()
export class ACLService {
  private _roles: string[] = [];
  private change$ = new BehaviorSubject<string[]>([]);

  get change(): Observable<string[]> {
    return this.change$.pipe(share());
  }

  get roles() {
    return this._roles;
  }

  // 重新设置角色
  setRole(roles: string[] | string) {
    this._roles = [];
    this.add(roles);
    this.change$.next(this._roles);
  }

  // 添加角色
  attachRole(roles: string[] | string) {
    this.add(roles);
    this.change$.next(this._roles);
  }

  // 清空角色
  clearRole() {
    this._roles = [];
    this.change$.next(this._roles);
  }

  // 移除角色
  removeRole(roles: string[] | string) {
    if (!Array.isArray(roles)) {
      roles = [roles];
    }
    for (let i = 0, j = roles.length; i < j; i++) {
      const index = this._roles.indexOf(roles[i]);
      if (index !== -1) {
        this._roles.splice(index, 1);
      }
    }
    this.change$.next(this._roles);
  }

  // 检查用户是否有对应角色
  can(value: string[] | string): boolean {
    if (!Array.isArray(value)) {
      value = [value];
    }
    for (let i = 0, j = value.length; i < j; i++) {
      if (this._roles.includes(value[i])) {
        return true;
      }
    }
    return false;
  }

  // 添加角色
  add(roles: string[] | string) {
    if (!Array.isArray(roles)) {
      roles = [roles];
    }
    for (let i = 0, j = roles.length; i < j; i++) {
      if (!this._roles.includes(roles[i])) {
        this._roles.push(roles[i]);
      }
    }
  }
}
