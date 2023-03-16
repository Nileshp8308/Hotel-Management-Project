import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ViewHotelListComponent } from './view-hotel-list/view-hotel-list.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { FilterPipe } from './filter.pipe';
import { UserForgotPassComponent } from './user-forgot-pass/user-forgot-pass.component';


@NgModule({
  declarations: [
    UserLandingComponent,
    UserSignupComponent,
    UserLoginComponent,
    ViewHotelListComponent,
    HotelBookingComponent,
    FilterPipe,
    UserForgotPassComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
