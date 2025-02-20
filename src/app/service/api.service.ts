import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getdata(apiUrl:string){
   return this.http.get(apiUrl);
  }

  createdata(apiUrl:string, requestbody:any){
return this.http.post(apiUrl,requestbody);
  }
 
}
