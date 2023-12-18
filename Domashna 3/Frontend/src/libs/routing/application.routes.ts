import { Routes } from '@angular/router';
import MapComponent from '../maps/components/map/map.component';
import { LocationsListComponent } from '../maps/components/locations-list/locations-list.component';
import { AddLocationComponent } from '../maps/components/add-location/add-location.component';

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
    path: 'addPlace',
    component: AddLocationComponent,
  },
  {
    path: '**',
    redirectTo: '/map',
  },
];
