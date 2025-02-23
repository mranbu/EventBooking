import { CommonModule } from '@angular/common';
import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { SessionService } from '../service/session.service';
import { apiUrls } from '../constants/globalContants';
import { response } from 'express';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  profileData : FormGroup = new FormGroup(
{
  username: new FormControl(''), 
  mobile: new FormControl(''), 
  email: new FormControl(''), 
  password: new FormControl(''), 
}
  );


  constructor(private apiservice:ApiService, private sessionservice:SessionService){
    this.sessionservice.validateSession();
  }

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData(){
    this.apiservice.getdata(apiUrls.userApi+"/"+this.sessionservice.getUserId()).subscribe(
      (responseData:any)=>{

        this.dataLoadPandren(responseData);
         
      },
      err =>{console.log(err);}
    );

  }



dataLoadPandren(responseData:any){
  this.profileData.get('username')?.setValue(responseData.username);
  this.profileData.get('mobile')?.setValue(responseData.mobile);
  this.profileData.get('email')?.setValue(responseData.email);
  this.profileData.get('password')?.setValue(responseData.password);
}


}
