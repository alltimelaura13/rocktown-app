import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { UserComponent } from '../components/user/user.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'registration',  component: RegisterComponent },
  { path: 'home', component: UserComponent },
//   { path: 'home', component:  },
//   { path: 'profile', component:  },
//   { path: 'settings', component:  }
];

