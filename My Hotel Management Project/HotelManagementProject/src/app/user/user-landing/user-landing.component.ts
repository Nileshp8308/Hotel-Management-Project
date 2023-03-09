import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent {
  url="http://localhost:3000/post"

  constructor(private router:Router,private service:ApiService){}

  redirect(){
    this.router.navigateByUrl("user/userSignUp")
  }
  submit(data:any){
    console.log(data)
    this.service.getApi(this.url).subscribe((res:any)=>{
      let user=res.forEach((element:any) => {
        if(data.username==element.username && data.pass==element.pass){
          if(this.service.Getownerdata){
            this.router.navigateByUrl('/owner/afterlogin')
          }
        }
      });
    })
  }
}
