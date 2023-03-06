import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLandingComponent } from './owner-landing.component';

describe('OwnerLandingComponent', () => {
  let component: OwnerLandingComponent;
  let fixture: ComponentFixture<OwnerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
