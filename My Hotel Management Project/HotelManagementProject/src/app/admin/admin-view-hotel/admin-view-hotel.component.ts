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
  refrehedlist: any;
  deletedHotels: Object | undefined;
  constructor(private service:ApiService){}
    ngOnInit(){
      this.service.getApi(this.getHotelUrl).subscribe((res:any)=>{
        console.log(res)
        this.getHotelList=res
      })
    }
    
    //Function Used to Delete  hotel Details and refresh the list
    async deleteHotelData(id:number){
      let url=this.getHotelUrl+"/"+id
      console.log(id);
      console.log(url);
      this.deletedHotels=await this.service.deleteAPI(url).toPromise()

      this.service.getApi(this.getHotelUrl).subscribe((res:any)=>{
        console.log(res);
        this.getHotelList= res
        console.log(this.getHotelList);
      })
      
    }
}
