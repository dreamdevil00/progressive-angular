import { ACLService } from './acl.service';

describe('acl: service', () => {

  const ADMIN = 'ADMIN';
  const USER = 'USER';

  let service: ACLService;

  beforeEach(() => {
    service = new ACLService();
    service.setRole(ADMIN);
  });

  it(`get change()`, (done: () => void) => {
    service.change.subscribe((res) => {
      expect(res.length).toBe(1);
      expect(res[0]).toBe(ADMIN);
      done();
    });
  });

  it(`add()`, () => {
    service.add('NEWROLE');
    expect(service.can(ADMIN)).toBe(true);
    expect(service.can('NEWROLE')).toBe(true);
  });

  it(`#can()`, () => {
    expect(service.can(ADMIN)).toBe(true);
    expect(service.can([ADMIN])).toBe(true);
    expect(service.can(ADMIN + '1')).toBe(false);
  });

  it(`#setRole()`, () => {
    service.setRole(ADMIN);
    expect(service.can(ADMIN)).toBe(true);
  });

  it(`#attachRole()`, () => {
    service.attachRole(['NEWROLE', ADMIN]);
    expect(service.can(ADMIN)).toBe(true);
    expect(service.can('NEWROLE')).toBe(true);
  });

  it(`#removeRole()`, () => {
    expect(service.can(ADMIN)).toBe(true);
    service.removeRole([ADMIN, 'INVALID']);
    expect(service.can(ADMIN)).toBe(false);
  });

});
