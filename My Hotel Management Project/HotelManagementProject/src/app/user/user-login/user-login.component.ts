import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  url="http://localhost:3000/user"

  constructor(private router:Router,private service:ApiService){}

  redirect(){
    this.router.navigateByUrl("user/userSignUp")
  }
  submit(data:any){
    console.log(data)
     this.service.getApi(this.url).subscribe((res:any)=>{
      let user=res;
      console.log(user)
      let user2=user.find((element:any)=>{
        return data.username == element.username && data.pass == element.pass
       })
       console.log(user2)
       if(user2){
        alert("You Are Log In Sucessfully")
        this.service.showHotelstoUserFlag=true;
        this.router.navigateByUrl("/user")
       }
       else{
        alert('Enter Valid Username And Password')
       }
     })
  }
}
