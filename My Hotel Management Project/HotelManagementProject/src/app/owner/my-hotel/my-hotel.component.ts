import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-my-hotel',
  templateUrl: './my-hotel.component.html',
  styleUrls: ['./my-hotel.component.scss']
})
export class MyHotelComponent {
  getHotelList: any = []
  url = "http://localhost:3000/hotelDetails";
  editAPIresponce: any;
  editarray: any;
  deleteApiresponce: any;
  resAfterDeleteAPI: any;
  waitforres: any;
  resAfterDelHotel: any = []
  ownerpass: any;
  nohotelavailable: any;
  hotelNotavailableflag!: boolean;
  hotelConfirmationAfterremovehotel: any;
  hotelConfirmation: any;

  constructor(private service: ApiService, private router: Router) { }
  ngOnInit() {
    this.hotellistbyOwner()
  }

  //Function called to show HotelList as per Owner

  async hotellistbyOwner() {
    // this.ownerpass=this.service.ownerPassword
    this.waitforres = await this.service.getApi(this.url).toPromise()
    console.log(this.waitforres);
    this.hotelConfirmation = this.waitforres.find((item: any) => {
      return item.pass == this.service.ownerPassword
    })
    console.log(this.hotelConfirmation);
    if (this.hotelConfirmation) {
      this.waitforres.find((element: any) => {
        console.log(element);
        console.log(this.service.ownerPassword);
        if (this.service.ownerPassword == element.pass) {
          console.log(element);
          this.getHotelList.push(element)
          console.log(this.getHotelList);
        }
      })
    }
    else if(!this.hotelConfirmation){
      this.hotelNotavailableflag = true;
    }
  }

  // Function called to edit hotel details

  async editHotelData(data: any) {
    this.service.newHotelRegFlag = false;
    this.service.editHotelFlag = true;
    this.service.edithotelid = data
    let url = this.url + "/" + data;
    this.editAPIresponce = await this.service.getApi(url).toPromise();
    this.editarray = this.editAPIresponce
    this.service.serviceeditAPIResponce = this.editarray;
    console.log(this.service.serviceeditAPIResponce.ownername)
    this.router.navigateByUrl("/owner/newhotel")
  }

  // Function called to delete hotel details

  async deleteHotelData(data: any) {
    this.resAfterDelHotel=[];
    let delurl = this.url + "/" + data
    let id = data
    this.deleteApiresponce = await this.service.deleteAPI(delurl).toPromise()
    console.log(this.deleteApiresponce)
    this.service.getApi(this.url).subscribe((res: any) => {
      this.resAfterDeleteAPI = res
      this.hotelConfirmationAfterremovehotel = this.resAfterDeleteAPI.find((element: any) => {
        return element.pass == this.service.ownerPassword
      })
      console.log(this.hotelConfirmationAfterremovehotel)
      if (this.hotelConfirmationAfterremovehotel) {
        this.resAfterDeleteAPI.find((item: any) => {
          if (item.pass == this.service.ownerPassword) {
            this.resAfterDelHotel.push(item);
            this.getHotelList = this.resAfterDelHotel
          }
        })
      }
      else if (!this.hotelConfirmationAfterremovehotel) {
        this.getHotelList = [];
        this.hotelNotavailableflag = true;
      }
    })
  }
}



