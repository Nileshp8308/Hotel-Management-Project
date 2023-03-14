import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.scss']
})
export class HotelBookingComponent {
  hotelBookingForm!:FormGroup
  getUrl="http://localhost:3000/user";
  postUrl="http://localhost:3000/hotelBookings"
  constructor(private builder:FormBuilder,private service:ApiService,private router:Router){}

  ngOnInit(){
    this.hotelBooking()
  }

  hotelBooking(){
    this.hotelBookingForm=this.builder.group({
      username:[''],
      checkin:[""],
      checkout:[''],
      pass:[''],
      Amount:[''],
      Mob:[''],
      add:['']
    })
  }

  submit(data:any){
   console.log(data);
   this.service.getApi(this.getUrl).subscribe((res:any)=>{
    console.log(res)
     let user=res
     let user2=user.find((element:any)=>{
      return data.username==element.username && data.pass == element.pass
     })
     if(user2){
        alert('Booked Hotel Sucessfully');
        this.service.postAPI(this.postUrl,data).subscribe((res:any)=>{
          console.log(res)
        })
        this.router.navigateByUrl("/user")
     }
     else{
      alert("Enter Valid Username And Password")
     }
   })
  }

}
