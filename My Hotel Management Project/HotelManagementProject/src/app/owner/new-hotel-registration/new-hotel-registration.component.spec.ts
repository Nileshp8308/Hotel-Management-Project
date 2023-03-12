import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotelRegistrationComponent } from './new-hotel-registration.component';

describe('NewHotrlRegistrationComponent', () => {
  let component: NewHotelRegistrationComponent;
  let fixture: ComponentFixture<NewHotelRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHotelRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHotelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
