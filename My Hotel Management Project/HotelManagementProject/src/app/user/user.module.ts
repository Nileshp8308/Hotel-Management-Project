import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSignupComponent } from './user-signup/user-signup.component';


@NgModule({
  declarations: [
    UserLandingComponent,
    UserSignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
