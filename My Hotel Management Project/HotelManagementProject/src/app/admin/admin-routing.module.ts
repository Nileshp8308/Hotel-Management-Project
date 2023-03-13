import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminViewHotelComponent } from './admin-view-hotel/admin-view-hotel.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {component:AdminLandingComponent,path:''},
  {component:AdminLoginComponent,path:'adminLogin'},
  {component:AdminSignupComponent,path:'adminSignup'},
  {component:AdminViewHotelComponent,path:'adminViewhotel'},
  {component:ForgotPasswordComponent,path:'forgotPass'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
