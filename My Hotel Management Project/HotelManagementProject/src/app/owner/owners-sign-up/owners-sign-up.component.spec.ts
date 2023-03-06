import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersSignUpComponent } from './owners-sign-up.component';

describe('OwnersSignUpComponent', () => {
  let component: OwnersSignUpComponent;
  let fixture: ComponentFixture<OwnersSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnersSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnersSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
