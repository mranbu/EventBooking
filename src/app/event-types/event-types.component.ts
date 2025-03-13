import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
import { apiUrls } from '../constants/globalContants';
import { ApiService } from '../service/api.service';
import { subscribe } from 'diagnostics_channel';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-event-types',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './event-types.component.html',
  styleUrl: './event-types.component.scss'
})
export class EventTypesComponent   implements OnInit{

  eventtypes:any;
  

  constructor(private sessionService:SessionService, private router:Router ,private api:ApiService){}
    
  
  ngOnInit():void{
  this.sessionService.validateSession();
  this.getCardData();
  
  }  
  goToDetailEvent(eId:string){
    this.sessionService.seteventSession(eId);
   this.router.navigate(['event-details'])
    
  }

  
  /*
id, eventName, description, services, thumbnailImg, detailImg, price

*ngFor

(click) = showDetail(id)


session -> id -> GET with filter

(click)= bookNow(id)
  */
 
getCardData(){
   this.api.getdata(apiUrls.eventapi).subscribe(
    (responseData:any) =>{
       this.eventtypes=responseData;
    },
    err =>{console.log(err)}
   );
}




}
