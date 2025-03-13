import { CommonModule } from '@angular/common';
import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { ApiService } from '../service/api.service';
import { apiUrls } from '../constants/globalContants';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-adminaccount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminaccount.component.html',
  styleUrl: './adminaccount.component.scss'
})
export class AdminaccountComponent  implements OnInit {
  message: any;

  constructor(private apiservice:ApiService, private sessionservice:SessionService){}
  ngOnInit(): void {
    this.usermeg();
    this.sessionservice.validateSession();
  }
 
  meg :any;

usermeg(){

   this.apiservice.getdata(apiUrls.messApi).subscribe(
   (response:any)=>{
       this.meg = response
   },
   err=>{console.log(err);}
  );
}

delatemeg(meg :any){
 
  this.apiservice.deleteData(apiUrls.messApi,meg.id).subscribe(
    ()=>{
          this.usermeg();
    },
    err=>{console.log(err);}
  );
}

}
