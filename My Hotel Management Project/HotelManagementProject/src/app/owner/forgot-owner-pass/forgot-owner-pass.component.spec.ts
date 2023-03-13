import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotOwnerPassComponent } from './forgot-owner-pass.component';

describe('ForgotOwnerPassComponent', () => {
  let component: ForgotOwnerPassComponent;
  let fixture: ComponentFixture<ForgotOwnerPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotOwnerPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotOwnerPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
