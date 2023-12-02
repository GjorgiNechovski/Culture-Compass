import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '../../models/map.models';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
})
export class LocationDetailsComponent {
  @Input() place!: Location;
  @Output() cancelModal = new EventEmitter<void>();

  selectedView: string = 'general';

  toggleView(view: string): void {
    this.selectedView = view;
  }

  closeModal() {
    this.cancelModal.emit();
  }
}
