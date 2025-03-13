import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { apiUrls } from '../constants/globalContants';
import { SessionService } from '../service/session.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent  implements OnInit {
  eventDetail: any;
detailImg: any;
eName: any;
services: any;
descriptaion: any;
price: any;

      
  constructor(private apiservice:ApiService, private sessionservice:SessionService, private router:Router){}
  ngOnInit(): void {
   this.getEventData();
   this.sessionservice.validateSession();
  
  }

  goToBookPage(eId:any){
    this.router.navigate(['booking'])
    this.sessionservice.seteventSession(eId);
  }

      getEventData(){
          this.apiservice.getdata(apiUrls.eventapi+"/"+this.sessionservice.geteventId()).subscribe(
            (responseData:any)=>{
      
             this.eventDetail=responseData;
               
            },
            err =>{console.log(err);}
          );
      
        }
      
}
