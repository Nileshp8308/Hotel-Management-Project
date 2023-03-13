import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-view-hotel',
  templateUrl: './admin-view-hotel.component.html',
  styleUrls: ['./admin-view-hotel.component.scss']
})
export class AdminViewHotelComponent {
  getHotelList:any;
  getHotelUrl="http://localhost:3000/hotelDetails"
  constructor(private service:ApiService){}
    ngOnInit(){
      this.service.getApi(this.getHotelUrl).subscribe((res:any)=>{
        console.log(res)
        this.getHotelList=res
      })
    }
    // editHotelData(id:number){
    //   console.log(id)
    // }
    deleteHotelData(id:number){
      let url=this.getHotelUrl+"/"+id
      console.log(url);
      this.service.deleteAPI(url).subscribe((res:any)=>{
      })
      this.service.getApi(this.getHotelUrl).subscribe((res:any)=>{
        console.log(res)
        this.getHotelList=res
      })
    }
}
