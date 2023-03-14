import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnersSignUpComponent } from './owners-sign-up/owners-sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { AfterLoginComponent } from './after-login/after-login.component';
import { OwnersloginComponent } from './ownerslogin/ownerslogin.component';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';
import { MyHotelComponent } from './my-hotel/my-hotel.component';
import { ForgotOwnerPassComponent } from './forgot-owner-pass/forgot-owner-pass.component';
@NgModule({
  declarations: [
    OwnerLandingComponent,
    OwnersSignUpComponent,
    AfterLoginComponent,
    OwnersloginComponent,
    NewHotelRegistrationComponent,
    MyHotelComponent,
    ForgotOwnerPassComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    
  ]
})
export class OwnerModule { }
