import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { UserComponent } from '../components/user/user.component';
import { ProfileConfigComponent } from '../components/user/profile-config/profile-config.component';
import { AuthService } from '../services/auth.service';
import { IndexPageComponent } from '../components/index-page/index-page.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'registration',  component: RegisterComponent },
  { path: 'home', component: UserComponent },
  { path: 'settings', component: ProfileConfigComponent },
  { path: 'index', component:  IndexPageComponent},
//   { path: 'settings', component:  }
];

