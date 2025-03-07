import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  patch: any;

  constructor(private http:HttpClient) { }

  getdata(apiUrl: string){
   return this.http.get(apiUrl);
  }

  createdata(apiUrl:string, requestbody:any){
return this.http.post(apiUrl,requestbody);
  }
 
  updateData(apiUrl:string, requestBody:any ,dataId:string){
    apiUrl += '/'+dataId
    return this.http.patch(apiUrl,requestBody);
      
   }
     
   deleteData( apiUrl:string, dataId:string){
    apiUrl +='/'+dataId
    return this.http.delete(apiUrl)

   }
}
