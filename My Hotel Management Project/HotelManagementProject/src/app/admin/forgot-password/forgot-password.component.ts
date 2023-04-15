import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  @ViewChild('newpass') input!: ElementRef
  forgotDataForm!: FormGroup
  getUrl = "http://localhost:3000/admin"
  patchPassword: { pass: string } = {
    pass: ""
  }
  newpassValue!: any;
  matchValue!: string;
  errormsgFlag = false;

  constructor(private builder: FormBuilder, private service: ApiService, private router: Router) { }

  ngOnInit() {

    this.forgotData()
  }

  forgotData() {

    this.forgotDataForm = this.builder.group({
      Mob: ['', [Validators.required, Validators.minLength(10)]],
      Newpass: ['', Validators.required],
      Confirmpass: ['', Validators.required]
    })

  }
  
// Function Used To Show  Error Msg When Password And Confirm Password are not same and also Update password by using Patch Api 
  submit(data: any) {
      console.log(data)
      this.service.getApi(this.getUrl).subscribe((res: any) => {
        console.log(res)
        let user = res
        let user2 = user.find((element: any) => {
          return data.Mob == element.mob
        })
        console.log(user2)
        if (!user2 && data.Newpass !== data.Confirmpass) {
          this.errormsgFlag = true
          alert("Enter Valid Mobile Number and Password Must Match")
        }
        else if (user2 && data.Newpass !== data.Confirmpass) {
          this.errormsgFlag = true
          alert("Password Must Match")
        }
        else if (!user2 && data.Newpass == data.Confirmpass) {
          alert("Enter Valid Mobile Number")
        }
        else if (user2 && data.Newpass == data.Confirmpass) {
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
          this.router.navigateByUrl("/admin/adminLogin")
        }
      })
    
  }
}

