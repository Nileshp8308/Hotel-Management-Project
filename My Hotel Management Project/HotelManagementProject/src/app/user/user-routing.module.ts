import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHotelComponent } from '../owner/my-hotel/my-hotel.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { UserForgotPassComponent } from './user-forgot-pass/user-forgot-pass.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ViewHotelListComponent } from './view-hotel-list/view-hotel-list.component';

const routes: Routes = [
  {component:UserLandingComponent,path:''},
  {component:UserSignupComponent,path:'userSignUp'},
  {component:UserLoginComponent,path:'userLogin'},
  {component:ViewHotelListComponent,path:'viewHotelList'},
  {component:HotelBookingComponent,path:'bookHotel'},
  {component:UserForgotPassComponent,path:'userForgot'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
