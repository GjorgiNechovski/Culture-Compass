import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Marker, Place } from '../../models/map.models';
import { PlacesFacade } from '../../state/map-state.facade';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
})
export class LocationDetailsComponent {
  @Input() place!: Place;
  @Output() cancelModal = new EventEmitter<void>();

  constructor(private placesFacade: PlacesFacade) {}

  selectedView: string = 'general';

  addOrigin(place: Place) {
    const marker: Marker = { lat: place.xcoordinate, lng: place.ycoordinate };

    this.placesFacade.changeOrigin(marker);
  }

  addDestination(place: Place) {
    const marker: Marker = { lat: place.xcoordinate, lng: place.ycoordinate };

    this.placesFacade.changeDestination(marker);
  }

  toggleView(view: string): void {
    this.selectedView = view;
  }

  closeModal() {
    this.cancelModal.emit();
  }
}
