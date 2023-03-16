import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForgotPassComponent } from './user-forgot-pass.component';

describe('UserForgotPassComponent', () => {
  let component: UserForgotPassComponent;
  let fixture: ComponentFixture<UserForgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserForgotPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
