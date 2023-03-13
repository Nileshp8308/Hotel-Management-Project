import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-my-hotel',
  templateUrl: './my-hotel.component.html',
  styleUrls: ['./my-hotel.component.scss']
})
export class MyHotelComponent {
  getHotelList:any;
  url="http://localhost:3000/hotelDetails";
  editAPIresponce: any;
  editarray: any;
  deleteApiresponce: any;
  resAfterDeleteAPI: any;

  constructor(private service:ApiService,private router:Router){}
  ngOnInit(){
     
    this.service.getApi(this.url).subscribe((res:any)=>{
      console.log(res)
      this.getHotelList=res
    })
  }
  async editHotelData(data:any){
    this.service.newHotelRegFlag=false;
    this.service.editHotelFlag=true;
    this.service.edithotelid=data
   let url=this.url+"/"+data;
   this.editAPIresponce= await this.service.getApi(url).toPromise();
   this.editarray=this.editAPIresponce
   this.service.serviceeditAPIResponce=this.editarray;
   console.log(this.service.serviceeditAPIResponce.ownername)
   this.router.navigateByUrl("/owner/newhotel")
  }
async deleteHotelData(data:any){
  let url=this.url+"/"+data
  let id=data
  this.deleteApiresponce= await this.service.deleteAPI(url).toPromise()
   console.log(this.deleteApiresponce)
     this.service.getApi(this.url).subscribe((res:any)=>{
       this.resAfterDeleteAPI=res
      console.log(this.resAfterDeleteAPI)
      this.getHotelList=this.resAfterDeleteAPI
     })
  }
}
