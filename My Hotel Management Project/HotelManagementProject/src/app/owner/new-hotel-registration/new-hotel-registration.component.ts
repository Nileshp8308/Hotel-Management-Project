import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-hotel-registration',
  templateUrl: './new-hotel-registration.component.html',
  styleUrls: ['./new-hotel-registration.component.scss']
})
export class NewHotelRegistrationComponent {
  ownerHotelData!:FormGroup
  geturl="http://localhost:3000/owner"
  posturl="http://localhost:3000/hotelDetails"
  tseditAPIresponce: any;
  hotelid:any;
  editArray:any=[]

  constructor(private service:ApiService,private builder:FormBuilder,private router:Router){}

  ngOnInit(){
    // this.hotelid=this.service.HotelId
    this.tseditAPIresponce=this.service.serviceeditAPIResponce
    console.log(this.tseditAPIresponce)
   this.hotelData()
  }
  // fetchidData(){
  //   this.tseditAPIresponce.forEach((element:any) => {
  //     if(this.hotelid==element.id){
  //       this.editArray.push(element)
  //     }
  //   });
  // }
  hotelData() {
    this.ownerHotelData=this.builder.group({
      ownername:[this.tseditAPIresponce ? this.tseditAPIresponce.ownername:''],
      ownermob:[this.tseditAPIresponce ? this.tseditAPIresponce.ownermob:''],
      hotelname:[this.tseditAPIresponce ? this.tseditAPIresponce.hotelname:''],
      hoteladdress:[this.tseditAPIresponce ? this.tseditAPIresponce.hoteladdress:''],
      hotelmob:[this.tseditAPIresponce ? this.tseditAPIresponce.hotelmob:''],
      hotelmenu:[this.tseditAPIresponce ? this.tseditAPIresponce.hotelmob:''],
      room:[this.tseditAPIresponce ? this.tseditAPIresponce.room:''],
      pass:[this.tseditAPIresponce ? this.tseditAPIresponce.pass:''],
      check:[this.tseditAPIresponce ? this.tseditAPIresponce.check:'']
    })
  }
  submit(data:any){
    console.log(data)
    this.service.getApi(this.geturl).subscribe((res:any)=>{
      let user= res
      let user1=user.find((element:any)=>{
        return data.pass==element.pass
      })
      if(user1){
        alert('Hotel Registered Sucessfully')
        this.service.postAPI(this.posturl,data).subscribe((res:any)=>{
          console.log(res)
        })
        this.ownerHotelData.reset()
        this.router.navigateByUrl('/owner/myhotel')
      }
      else{
        alert('Enter Valid Password')
      }
    })
  }
}
