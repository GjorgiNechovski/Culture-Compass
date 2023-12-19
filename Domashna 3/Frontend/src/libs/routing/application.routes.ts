import { Routes } from '@angular/router';
import MapComponent from '../maps/components/map/map.component';
import { LocationsListComponent } from '../maps/components/locations-list/locations-list.component';
import { AddLocationComponent } from '../maps/components/add-location/add-location.component';
import { LogInComponent } from '../authentication/components/log-in/log-in.component';
import { RegisterComponent } from '../authentication/components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'locationList',
    component: LocationsListComponent,
  },
  {
    path: 'addPlace',
    component: AddLocationComponent,
  },
  {
    path: '**',
    redirectTo: '/map',
  },
];
