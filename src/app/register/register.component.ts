import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { Router, RouterConfigOptions, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../service/api.service';
import { error } from 'console';
import { apiUrls } from '../constants/globalContants';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  username:string='';
  password:any;
  cfpswd:any;
  mobile:number=0;
  email:any;

  constructor(private api:ApiService, private router:Router){}

  regacc(){
    let requestbody={
      username:this.username,
      password:this.password,
      mobile:this.mobile,
      email:this.email
    }
    
    this.api.createdata(apiUrls.userApi, requestbody).subscribe(
      ()=>{alert('Register succesfully..');
      this.router.navigate(['login']);
      },
      error=>{console.log(error )}
    );
    
  }
 
 
}

