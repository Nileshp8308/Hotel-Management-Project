import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-hotel-registration',
  templateUrl: './new-hotel-registration.component.html',
  styleUrls: ['./new-hotel-registration.component.scss']
})
export class NewHotelRegistrationComponent {
  ownerHotelData!: FormGroup
  geturl = "http://localhost:3000/owner"
  posturl = "http://localhost:3000/hotelDetails"
  tseditAPIresponce: any;
  hotelid: any;
  editArray: any = []

  constructor(private service: ApiService, private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
    // this.hotelid=this.service.HotelId
    // this.tseditAPIresponce=this.service.serviceeditAPIResponce
    console.log(this.tseditAPIresponce)
    if (this.service.newHotelRegFlag) {
      this.tseditAPIresponce = {};
    }
    else {
      this.tseditAPIresponce = this.service.serviceeditAPIResponce
    }
    this.hotelData()
  }

  hotelData() {
    this.ownerHotelData = this.builder.group({
      ownername: [this.tseditAPIresponce ? this.tseditAPIresponce.ownername : '', Validators.required],
      ownermob: [this.tseditAPIresponce ? this.tseditAPIresponce.ownermob : '', [Validators.required, Validators.minLength(10)]],
      hotelname: [this.tseditAPIresponce ? this.tseditAPIresponce.hotelname : '', Validators.required],
      hoteladdress: [this.tseditAPIresponce ? this.tseditAPIresponce.hoteladdress : '', Validators.required],
      hotelmob: [this.tseditAPIresponce ? this.tseditAPIresponce.hotelmob : '', [Validators.required, Validators.minLength(10)]],
      hotelmenu: [this.tseditAPIresponce ? this.tseditAPIresponce.hotelmenu : '', Validators.required],
      room: [this.tseditAPIresponce ? this.tseditAPIresponce.room : '', Validators.required],
      pass: [this.tseditAPIresponce ? this.tseditAPIresponce.pass : '', Validators.required],
      check: [this.tseditAPIresponce ? this.tseditAPIresponce.check : '', Validators.requiredTrue]
    })
  }
  submit(data: any) {
    if (data.ownername) {
      console.log(data)
      this.service.getApi(this.geturl).subscribe((res: any) => {
        let user = res
        let user1 = user.find((element: any) => {
          return data.pass == element.pass && data.pass == this.service.ownerPassword
        })
        // this.service.getApi(this.posturl).subscribe((res:any)=>{
        //   let user2=res;
        //   console.log(user2)
        //   let user3=user2.find((element:any)=>{
        //     return data.ownername==element.ownername
        //   })
        // })
        if (user1 && this.service.editHotelFlag) {
          let url = this.posturl + "/" + this.service.edithotelid
          this.service.patchAPI(url, data).subscribe((ref: any) => {
            console.log(res)
            this.router.navigateByUrl('/owner/myhotel')
            this.ownerHotelData.reset()
          })
        }
        else if (user1) {
          alert('Hotel Registered Sucessfully')
          this.service.postAPI(this.posturl, data).subscribe((res: any) => {
            console.log(res)
          })
          this.router.navigateByUrl('/owner/myhotel')
          this.ownerHotelData.reset()
        }
        else {
          alert('Enter Valid Password')
        }
      })
    }
  }
}

