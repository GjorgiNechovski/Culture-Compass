import { Routes } from '@angular/router';
import MapComponent from '../maps/components/map/map.component';
import { LoginComponent } from '../maps/components/auth/login.component';
import { RegisterComponent } from '../maps/components/auth/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full',
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: '**',
    redirectTo: '/map',
  },
  { path: 'login',
    component: LoginComponent,
  },
  { path: 'register',
  component: RegisterComponent,
  },
];
