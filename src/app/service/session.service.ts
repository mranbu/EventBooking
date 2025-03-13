import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }


  validateSession(){
    let user = sessionStorage.getItem('userId') || '';
    if(user == ''){
      alert('Session expired ... Please try login again...');
      this.router.navigate(['/login']);
    }
  }
  getUserId(){
    return sessionStorage.getItem('userId') || '';
  }

  

  setUserSession(userId:string){
    sessionStorage.setItem('userId', userId);

  }

  seteventSession(eId : any){
    sessionStorage.setItem('eventId', eId);
  }

  geteventId(){
    return sessionStorage.getItem('eventId')
  }


  
  userlogout(){
    sessionStorage.removeItem('userId');
  }
 
}
