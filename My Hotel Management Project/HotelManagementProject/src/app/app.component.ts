import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HotelManagementProject';
  constructor(private service:ApiService,private router:Router){}

  redirect(path:any){
    if(path=="/user"){
      this.service.Getuserdata=path
      this.router.navigateByUrl('/user')
    }
    else if(path=="/owner"){
      this.service.Getownerdata=path
      this.router.navigateByUrl('/owner')
    }
    else{
      this.router.navigateByUrl('/admin')
    }
  }
}
