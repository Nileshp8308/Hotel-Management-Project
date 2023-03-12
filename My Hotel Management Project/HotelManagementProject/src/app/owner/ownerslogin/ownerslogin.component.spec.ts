import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersloginComponent } from './ownerslogin.component';

describe('OwnersloginComponent', () => {
  let component: OwnersloginComponent;
  let fixture: ComponentFixture<OwnersloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnersloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnersloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
