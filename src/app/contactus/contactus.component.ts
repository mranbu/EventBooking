import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../service/api.service';
import { apiUrls } from '../constants/globalContants';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent  implements OnInit{

  name:string="";
  email:any;
  mess:any;
  

constructor( private api:ApiService,  private router:Router, private sessionservice:SessionService){}
  ngOnInit(): void {
    this.sessionservice.validateSession();
  }

messAcc(){
  let requestbody={
     name:this.name,
     email:this.email,
     mess:this.mess,
  }

  this.api.createdata(apiUrls.messApi,requestbody).subscribe(
       ()=>{alert('mesage successfully..')},
       err=>{console.log(err )}
  );
}

}


