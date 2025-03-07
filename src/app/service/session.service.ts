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

  setProductSession(eId : any){
    sessionStorage.setItem('eventId', eId);
  }


  userlogout(){
    sessionStorage.removeItem('userId');
  }
 
}
