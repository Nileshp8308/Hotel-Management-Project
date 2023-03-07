import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.scss']
})
export class OwnerLandingComponent {

  constructor(private router:Router){}

  redirect(){
    this.router.navigateByUrl("owner/ownerSignUp")
  }
  submit(data:any){
    console.log(data)
  }
}
