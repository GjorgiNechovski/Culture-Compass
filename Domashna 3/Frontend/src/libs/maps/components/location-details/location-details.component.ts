import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from '../../models/map.models';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
})
export class LocationDetailsComponent {
  @Input() place!: Place;
  @Output() cancelModal = new EventEmitter<void>();

  selectedView: string = 'general';

  toggleView(view: string): void {
    this.selectedView = view;
  }

  closeModal() {
    this.cancelModal.emit();
  }
}
