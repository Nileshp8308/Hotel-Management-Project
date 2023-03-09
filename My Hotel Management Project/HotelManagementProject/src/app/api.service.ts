import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Getuserdata: any;
  Getownerdata: any;

  constructor(private http:HttpClient) { }

  postAPI(url: string, data: any) {
    return this.http.post(url,data)
  }
  getApi(data:any) {
    return this.http.get(data);
  }
}
