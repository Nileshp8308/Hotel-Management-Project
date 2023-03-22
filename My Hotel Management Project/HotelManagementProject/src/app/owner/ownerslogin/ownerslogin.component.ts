import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-ownerslogin',
  templateUrl: './ownerslogin.component.html',
  styleUrls: ['./ownerslogin.component.scss']
})
export class OwnersloginComponent {
  url = "http://localhost:3000/owner"
  exactmatch = false;

  constructor(private router: Router, private service: ApiService) { }

  redirect() {
    this.router.navigateByUrl("owner/ownerSignUp")
  }
  submit(data: any) {
      console.log(data)
      this.service.getApi(this.url).subscribe((res: any) => {
        let user = res
        let user1 = user.find((element: any) => {
          return data.username == element.username && data.pass == element.pass
        });
        console.log(user)
        console.log(user1)
        if (user1) {
          this.service.ownerPassword=data.pass 
          console.log(this.service.ownerPassword);
          alert("You are Log In Sucessfully")
          this.service.showmyHotels = true;
          this.router.navigateByUrl("/owner")
        }
        else {
          alert("Please Enter Valid Username and Password")
        }
      })
  }
  forgotPass() {
    this.router.navigateByUrl("/owner/forgotownerPass")
  }
}
