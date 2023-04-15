import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service'


@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent {
  adminDataForm!: FormGroup
  postURL = "http://localhost:3000/admin"

  constructor(private builder: FormBuilder, private service: ApiService, private router: Router) { }

  ngOnInit() {
    this.adminData()
  }



  adminData() {
    this.adminDataForm = this.builder.group({
      fname: ['', Validators.required],
      mname: ['', Validators.required],
      lname: ['', Validators.required],
      mob: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.email, Validators.required]],
      gender: ['',Validators.required],
      username: ['', Validators.required],
      pass: ['', Validators.required],
      check: ['', Validators.requiredTrue]
    })
  }
  // Function Used To Post Data

  submit(data: any) {
    console.log(data);
    this.service.getApi(this.postURL).subscribe((res: any) => {
      let user = res;
      console.log(user);
      let user1 = user.find((item: any) => {
        return item.mob == data.mob
      });
      console.log(user1);
      if (!user1) {
        if (data.fname) {
          console.log(data)
          this.service.postAPI(this.postURL, data).subscribe((res: any) => {
            console.log(res)
          })
          this.adminDataForm.reset()
          this.router.navigateByUrl("/admin/adminLogin")
        }
      }
      else if (user1) {
        alert("Allready Have An Account On This Mobile-Number")
      }
    })
  }
}
