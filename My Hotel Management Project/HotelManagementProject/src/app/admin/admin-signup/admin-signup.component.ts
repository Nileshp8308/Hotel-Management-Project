import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent {
  adminDataForm!:FormGroup
  postURL="http://localhost:3000/admin"
   
  constructor(private builder:FormBuilder,private service:ApiService,private router:Router){}

ngOnInit(){
  this.adminData()
}



  adminData(){
    this.adminDataForm=this.builder.group({
      fname:['',Validators.required],
      mname:['',Validators.required],
      lname:['',Validators.required],
      mob:['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.email,Validators.required]],
      female:[''],
      male:[''],
      // other:['other'],
      username:['',Validators.required],
      pass:['',Validators.required],
      check:['',Validators.requiredTrue]
    })
  }
  submit(data:any){
   
   if(data.fname){
    console.log(data)
   this.service.postAPI(this.postURL,data).subscribe((res:any)=>{
    console.log(res)
   })
    this.adminDataForm.reset()
    this.router.navigateByUrl("/admin/adminLogin")
  }
  }
}
