import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  Getuserdata: any;
  Getownerdata: any;
  showmyHotels!: boolean;
  serviceeditAPIResponce: any;
  HotelId:any;
  editHotelFlag: boolean=false;
  edithotelid: any;
  newHotelRegFlag: boolean=false;
  showmyHotelstoadminflag!: boolean;
  dataFromForgotpass="5"

  constructor(private http:HttpClient) { }

  postAPI(url: string, data: any) {
    return this.http.post(url,data)
  }
  getApi(data:any) {
    return this.http.get(data);
  }
  deleteAPI(url: string) {
     return this.http.delete(url)
  }
  patchAPI(url:any,data:any) {
    return this.http.patch(url,data)
  }
}
