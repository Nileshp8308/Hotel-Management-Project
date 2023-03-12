import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotrlRegistrationComponent } from './new-hotrl-registration.component';

describe('NewHotrlRegistrationComponent', () => {
  let component: NewHotrlRegistrationComponent;
  let fixture: ComponentFixture<NewHotrlRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHotrlRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHotrlRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
