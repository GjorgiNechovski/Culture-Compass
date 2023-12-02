import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import MapComponent from './components/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MapComponent, LocationDetailsComponent],
  imports: [CommonModule, NgbModule, GoogleMapsModule],
  exports: [MapComponent, LocationDetailsComponent],
})
export class MapsModule {}
