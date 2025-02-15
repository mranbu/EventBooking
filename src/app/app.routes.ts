import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent}

];
