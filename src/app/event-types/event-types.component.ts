import { Component } from '@angular/core';
import { SessionService } from '../service/session.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-types',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './event-types.component.html',
  styleUrl: './event-types.component.scss'
})
export class EventTypesComponent {

  constructor(private sessionService:SessionService){
    this.sessionService.validateSession();
  }
}
