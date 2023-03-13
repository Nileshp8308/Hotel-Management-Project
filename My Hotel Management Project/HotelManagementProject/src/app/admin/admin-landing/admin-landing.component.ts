import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.scss']
})
export class AdminLandingComponent {
  Showhoteltoadmin:any;

  constructor(private router:Router,private service:ApiService){}

  ngOnInit(){
    this.Showhoteltoadmin=this.service.showmyHotelstoadminflag
  }

  adminJourney(journey:string){
    console.log(journey)
    this.router.navigateByUrl(journey)
  }
}
