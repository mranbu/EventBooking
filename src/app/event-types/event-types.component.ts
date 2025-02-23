import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';


@Component({
  selector: 'app-event-types',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './event-types.component.html',
  styleUrl: './event-types.component.scss'
})
export class EventTypesComponent   implements OnInit{

  constructor(private sessionService:SessionService, private router:Router ){}
    
  
  ngOnInit():void{
  this.sessionService.validateSession();
  }

  goToDetail(){
    this.router.navigate(['event-details'])
  }
 
}
