import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.scss']
})
export class OwnerLandingComponent {
  url="http://localhost:3000/post"
  exactmatch=false;

  constructor(private router:Router,private service:ApiService){}

  redirect(){
    this.router.navigateByUrl("owner/ownerSignUp")
  }
  submit(data:any){
    console.log(data)
    this.service.getApi(this.url).subscribe((res:any)=>{
      let user=res.forEach((element:any) => {
        if(data.username==element.username && data.pass==element.pass){
           this.exactmatch=true
          if(this.service.Getownerdata){
            this.router.navigateByUrl('/owner/afterlogin')
          }
        }
       else if(!this.exactmatch){
        alert("Please")
       }
      });
    })
  }
}
