import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-owners-sign-up',
  templateUrl: './owners-sign-up.component.html',
  styleUrls: ['./owners-sign-up.component.scss']
})
export class OwnersSignUpComponent {
  studentDataForm!: FormGroup
  postAPIdata: any;
  serverResponce: any;
  constructor(private builder: FormBuilder, private service: ApiService, private router: Router) { }

  ngOnInit() {
    this.studentData()
  }

  studentData() {
    this.studentDataForm = this.builder.group({
      fname: ['', Validators.required],
      mname: ['', Validators.required],
      lname: ['', Validators.required],
      mob: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      gender: ['', Validators.required],
      // other:['other'],
      username: ['', Validators.required],
      pass: ['', Validators.required],
      check: ['', Validators.requiredTrue]
    })
  }

  //Function to Post Owner Details

  submit(data: any) {
    console.log(data);
    let url = "http://localhost:3000/owner"
    this.service.getApi(url).subscribe((res: any) => {
      let user = res;
      let confirmUser = user.find((item: any) => {
        return item.mob == data.mob
      })
      console.log(confirmUser);
      if (!confirmUser) {
        if (data.fname) {
          console.log(data);
          let formsData = data
          this.postAPIdata = this.service.postAPI(url, data).subscribe((api: any) => {
            this.serverResponce = api
            console.log(this.serverResponce)
            console.log(this.postAPIdata)
            if (this.serverResponce) {
              this.router.navigateByUrl("/owner/ownerlogin")
            }
          })
        }
      }
      else if (confirmUser) {
        alert("Allready Have An Account On This Mobile-Number")
      }
    })

    // if (data.fname) {
    //   console.log(data);
    //   let formsData = data
    //   let url = "http://localhost:3000/owner"
    //   this.postAPIdata = this.service.postAPI(url, data).subscribe((api: any) => {
    //     this.serverResponce = api
    //     console.log(this.serverResponce)
    //     console.log(this.postAPIdata)
    //     if (this.serverResponce) {
    //       this.router.navigateByUrl("/owner/ownerlogin")
    //     }
    //   })
    // }

  }
}
