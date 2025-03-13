import { CommonModule } from '@angular/common';
import { Component ,inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../service/api.service';
import { apiUrls } from '../constants/globalContants';
import { SessionService } from '../service/session.service';

import { ModalDismissReasons,  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent  {

    bookDetail :any;

   

    private modalService = inject(NgbModal);
    closeResult: WritableSignal<string> = signal('');
  
    open(content: TemplateRef<any>) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
        (result) => {
          this.closeResult.set(`Closed with: ${result}`);
        },
        (reason) => {
          this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
        },
      );
    }
  
    private getDismissReason(reason: any): string {
      switch (reason) {
        case ModalDismissReasons.ESC:
          return 'by pressing ESC';
        case ModalDismissReasons.BACKDROP_CLICK:
          return 'by clicking on a backdrop';
        default:
          return `with: ${reason}`;
      }
    }



constructor(private api:ApiService, private sessionservice:SessionService ){}

getEventData(){
  this.api.getdata(apiUrls.eventapi+"/"+this.sessionservice.geteventId()).subscribe(
    (responseData:any)=>{

     this.bookDetail=responseData;
       
    },
    err =>{console.log(err);}
  );

}

}
