import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,NgbDropdownModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(private router:Router, private sessionService: SessionService){}

   gotologinpage(){
    this.router.navigate(['login']);
   }
   
   userlogout(){
    this.sessionService.userlogout();
      alert('logout sucessfully...')
    
   }
}
