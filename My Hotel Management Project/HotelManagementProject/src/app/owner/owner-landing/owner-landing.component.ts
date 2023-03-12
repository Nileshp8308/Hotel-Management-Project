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

  constructor(private service:ApiService){}

  ngOnInit(){
   this.newhotel=this.service.showmyHotels
  }
}
