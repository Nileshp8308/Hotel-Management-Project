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
  hotelNotavailableflag!:boolean;

  constructor(private service: ApiService, private router: Router) { }
  ngOnInit() {
    this.hotellistbyOwner()
  }

  async hotellistbyOwner() {
    // this.ownerpass=this.service.ownerPassword
    this.waitforres = await this.service.getApi(this.url).toPromise()
    console.log(this.waitforres);
    this.waitforres.find((element: any) => {
      console.log(element);
      console.log(this.service.ownerPassword);
      if (this.service.ownerPassword == element.pass) {
        console.log(element);
        this.getHotelList.push(element)
        console.log(this.getHotelList);
      }
      // else if (this.service.ownerPassword && this.ownerpass == element.pass) {
      //   this.getHotelList.push(element)
      //   console.log(this.getHotelList);
      // }
    })
  }

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
  async deleteHotelData(data: any) {
    let url = this.url + "/" + data
    let id = data
    this.deleteApiresponce = await this.service.deleteAPI(url).toPromise()
    console.log(this.deleteApiresponce)
    this.service.getApi(this.url).subscribe((res: any) => {
      this.resAfterDeleteAPI = res
    this.resAfterDeleteAPI.find((item: any) => {
        if (item.pass == this.service.ownerPassword) {
          console.log(this.nohotelavailable);
          this.resAfterDelHotel.push(item);
          this.getHotelList = this.resAfterDelHotel
          // return true
        }
      //  if(!this.hotelNotavailableflag){
      //     this.getHotelList.push({noHotel:"Hotels are not available for this Account"});
      //     console.log(this.getHotelList);
      //   }
      })
    })
  }
}



