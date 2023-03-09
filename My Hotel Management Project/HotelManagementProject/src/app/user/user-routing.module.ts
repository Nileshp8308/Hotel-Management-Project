import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {component:UserLandingComponent,path:''},
  {component:UserSignupComponent,path:'userSignUp'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
