import { Routes } from '@angular/router';
import MapComponent from '../maps/components/map/map.component';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  },
=======
  }
>>>>>>> Stashed changes
];
