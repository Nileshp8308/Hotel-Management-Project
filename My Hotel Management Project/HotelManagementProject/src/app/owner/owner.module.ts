import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnersSignUpComponent } from './owners-sign-up/owners-sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { AfterLoginComponent } from './after-login/after-login.component';

@NgModule({
  declarations: [
    OwnerLandingComponent,
    OwnersSignUpComponent,
    AfterLoginComponent
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
