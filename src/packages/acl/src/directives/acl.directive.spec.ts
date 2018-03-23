import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixtureAutoDetect, ComponentFixture } from '@angular/core/testing';
import { ACLModule, ACLService } from '../index';

@Component({
  template: `
    <button acl [acl]="role" ></button>
  `
})
class TestComponent {
  role: string[] | string = 'admin';

  constructor(public acl: ACLService) {}
}

const CLS = 'acl_hide';

describe(`acl: directive`, () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ACLModule.forRoot()],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = dl.componentInstance;
    fixture.detectChanges();
  });

  it(`should show when  preveliged`, () => {
    context.acl.setRole(['admin', 'user']);
    fixture.detectChanges();
    expect(dl.queryAll(By.css('.' + CLS)).length).toBe(0);
  });

  it(`should hide when not  preveliged`, () => {
    context.acl.setRole('user');
    fixture.detectChanges();
    expect(dl.queryAll(By.css('.' + CLS)).length).toBe(1);
  });
});
