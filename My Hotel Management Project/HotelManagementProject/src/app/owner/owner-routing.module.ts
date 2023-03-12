import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginComponent } from './after-login/after-login.component';
import { MyHotelComponent } from './my-hotel/my-hotel.component';
import { NewHotelRegistrationComponent } from './new-hotel-registration/new-hotel-registration.component';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnersSignUpComponent } from './owners-sign-up/owners-sign-up.component';
import { OwnersloginComponent } from './ownerslogin/ownerslogin.component';

const routes: Routes = [
  {component:OwnerLandingComponent,path:''},
  {component:OwnersSignUpComponent,path:'ownerSignUp'},
  {component:AfterLoginComponent, path:'afterlogin'},
  {component:OwnersloginComponent,path:'ownerlogin'},
  {component:NewHotelRegistrationComponent,path:'newhotel'},
  {component:MyHotelComponent,path:'myhotel'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
