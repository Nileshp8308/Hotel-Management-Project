import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ConfirmPasswordValidator } from 'src/app/owner/confirm-password.validator';

@Component({
  selector: 'app-user-forgot-pass',
  templateUrl: './user-forgot-pass.component.html',
  styleUrls: ['./user-forgot-pass.component.scss']
})
export class UserForgotPassComponent {
  forgotDataForm!: FormGroup
  getUrl = "http://localhost:3000/user";
  newpass:any;
  patchPassword: { pass: string } = {
    pass: ''
  }
  constructor(private builder: FormBuilder, private service: ApiService, private router: Router) { }

  ngOnInit() {
    this.forgotData()
  }
  forgotData() {

    this.forgotDataForm = this.builder.group(
      {
      Mob: ['', [Validators.required, Validators.minLength(10)]],
      Newpass: ['', Validators.required],
      Confirmpass: ['', [Validators.required]]
    },
    {
      validator: ConfirmPasswordValidator("Newpass", "Confirmpass")
    }
    );
  }
  submit(data: any) {
    if(data.Mob){
    this.service.getApi(this.getUrl).subscribe((res: any) => {
      console.log(res)
      let user = res
      let user2 = user.find((element: any) => {
        return data.Mob == element.mob
      })
      console.log(user2)
      if (user2) {
        this.patchPassword.pass = data.Confirmpass
        let forgotPassUrl = this.getUrl + "/" + user2.id
        console.log(forgotPassUrl)
        console.log(this.patchPassword)
        console.log(user2.id)
        this.service.patchAPI(forgotPassUrl, this.patchPassword).subscribe((res: any) => {
          console.log(res)
        })
        alert("Password Updated Sucessfully")
        this.forgotDataForm.reset()
        this.router.navigateByUrl("/user/userLogin")
      }
      else {
        alert("Enter Registered Mobile Number")
      }
    })
    }
  }
}
