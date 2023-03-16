import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {
  studentDataForm!:FormGroup
  postAPIdata:any;
  serverResponce:any;
  constructor(private builder:FormBuilder,private service:ApiService,private router:Router){}

  ngOnInit(){
    this.studentData()
  }

  studentData(){
    this.studentDataForm=this.builder.group({
      fname:['',Validators.required],
      mname:['',Validators.required],
      lname:['',Validators.required],
      mob:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      female:[''],
      male:[''],
      username:['',Validators.required],
      pass:['',Validators.required],
      check:['',Validators.requiredTrue]
    })
  }
  submit(data:any){
    if(data.fname){
   let formsData=data
   let url="http://localhost:3000/user"
    this.postAPIdata=this.service.postAPI(url,data).subscribe((api:any)=>{
      this.serverResponce=api
      console.log(this.serverResponce)
      if(this.serverResponce){
        this.studentDataForm.reset()
        this.router.navigateByUrl("/user/userLogin")
      }
    })
  }
  }
}
