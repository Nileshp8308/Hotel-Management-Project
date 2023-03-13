import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.scss']
})
export class OwnerLandingComponent {
  newhotel=false;

  constructor(private service:ApiService,private router:Router){}

  ngOnInit(){
   this.newhotel=this.service.showmyHotels
  }
  ownerJourney(journey:string){
    console.log(journey)
    if(journey=="/owner/newhotel"){
      this.service.newHotelRegFlag=true;
      this.service.editHotelFlag=false;
      console.log(this.service.newHotelRegFlag)
    }
    this.router.navigateByUrl(journey)
  }
}
