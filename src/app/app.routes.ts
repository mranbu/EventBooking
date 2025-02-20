import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReviewComponent } from './review/review.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CombosComponent } from './combos/combos.component';
import { PaymentComponent } from './payment/payment.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventTypesComponent } from './event-types/event-types.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
     {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'review',component:ReviewComponent},
    {path:'booking', component:BookingComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'combos',component:CombosComponent},
    {path:'payment',component:PaymentComponent},
    {path:'event-details',component:EventDetailsComponent},
    {path: 'profile', component:ProfileComponent},
    {path:'event-types',component:EventTypesComponent}

];
