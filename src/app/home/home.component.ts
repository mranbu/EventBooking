import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { AboutusComponent } from "../aboutus/aboutus.component";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryComponent, AboutusComponent,CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  
}
