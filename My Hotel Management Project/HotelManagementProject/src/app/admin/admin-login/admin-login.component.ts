import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  getUrl="http://localhost:3000/admin"
  constructor(private service:ApiService,private router:Router){}

  submit(data:any){
    console.log(data)
    this.service.getApi(this.getUrl).subscribe((res:any)=>{
      console.log(res)
      let user=res
      let user2=user.find((element:any)=>{
        return data.username==element.username && data.pass==element.pass
      })
      console.log(user2)
      if(user2){
        alert("Log in Sucessfully")
        this.service.showmyHotelstoadminflag=true
        this.router.navigateByUrl("/admin")
      }
      else{
        alert("Enter Valid Username And Password")
      }
    })
  }
  redirect(){
    this.router.navigateByUrl("/admin/adminSignup")
  }
  forgot(){
    console.log("Forgot")
    this.router.navigateByUrl("/admin/forgotPass")
  }
}
