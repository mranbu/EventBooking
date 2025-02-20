import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../service/api.service';
import { apiUrls } from '../constants/globalContants';
import { response } from 'express';
import { error } from 'console';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,NgbAlertModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 username: string='';
 password:any;

errmeg:string='';

 constructor(private api:ApiService, private sessionService : SessionService, private router: Router){}


checkLogin(){
let filter = "?username="+ this.username + "&password="+this.password;
this.api.getdata(apiUrls.userApi+filter ).subscribe(
  (responseData:any)=>{
    if(responseData.length > 0){
      alert("login succesfully");
      this.sessionService.setUserSession(responseData[0].id);
      this.router.navigate(['/event-types']);

    }else{
      this.errmeg ='Invalid username or password.';
    }
  },
  err=>{console.log(err);
   this.errmeg ='An error occurred. kindly try again later';
  }
  
);
}

}

