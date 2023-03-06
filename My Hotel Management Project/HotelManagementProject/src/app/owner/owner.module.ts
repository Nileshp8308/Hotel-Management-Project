import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { FormsModule } from '@angular/forms';
import { OwnersSignUpComponent } from './owners-sign-up/owners-sign-up.component';


@NgModule({
  declarations: [
    OwnerLandingComponent,
    OwnersSignUpComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule
  ]
})
export class OwnerModule { }
