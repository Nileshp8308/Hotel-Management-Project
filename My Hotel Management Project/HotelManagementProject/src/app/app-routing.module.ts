import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component:HomeComponent, path:''},
  {path:'user',loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)},
  {path:'owner',loadChildren:()=> import('./owner/owner.module').then(m=>m.OwnerModule)},
  {path:'admin',loadChildren:()=> import('./admin/admin.module').then (m=>m.AdminModule)},
  {component:HomeComponent,path:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
