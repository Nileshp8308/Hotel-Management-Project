import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminViewHotelComponent } from './admin-view-hotel/admin-view-hotel.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AdminLandingComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    AdminViewHotelComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
    
  ]
})
export class AdminModule { }
