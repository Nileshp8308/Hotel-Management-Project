import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent {
  
  showHotelstoUserFlag:any;
  constructor(private router:Router,private service:ApiService){}

  ngOnInit(){
    this.showHotelstoUserFlag=this.service.showHotelstoUserFlag
  }
  userJourney(data:any){
   this.router.navigateByUrl(data)
  }


}
