import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnersSignUpComponent } from './owners-sign-up/owners-sign-up.component';

const routes: Routes = [
  {component:OwnerLandingComponent,path:''},
  {component:OwnersSignUpComponent,path:'ownerSignUp'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
