import { Routes } from '@angular/router';
import MapComponent from '../maps/components/map/map.component';
import { LocationsListComponent } from '../maps/components/locations-list/locations-list.component';

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
    path: 'locationList',
    component: LocationsListComponent,
  },
  {
    path: '**',
    redirectTo: '/map',
  },
];
