import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewHotelComponent } from './admin-view-hotel.component';

describe('AdminViewHotelComponent', () => {
  let component: AdminViewHotelComponent;
  let fixture: ComponentFixture<AdminViewHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
