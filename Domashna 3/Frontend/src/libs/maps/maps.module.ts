import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import MapComponent from './components/map/map.component';
import {
  GoogleMap,
  GoogleMapsModule,
  MapDirectionsRenderer,
} from '@angular/google-maps';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MAP_STORE_KEY } from './state/map-state.state';
import { MapReducer } from './state/map-state.reducer';
import { MapEffects } from './state/map-state.effects';

@NgModule({
  declarations: [MapComponent, LocationDetailsComponent],
  imports: [
    CommonModule,
    NgbModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(MAP_STORE_KEY, MapReducer),
    EffectsModule.forFeature([MapEffects]),
  ],
  exports: [MapComponent, LocationDetailsComponent],
})
export class MapsModule {}
