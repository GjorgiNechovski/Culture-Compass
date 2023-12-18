import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Marker, Place } from '../../models/map.models';
import { PlacesFacade } from '../../state/map-state.facade';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadNewReview } from '../../models/review.models';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
})
export class LocationDetailsComponent {
  @Input() place!: Place;
  @Output() cancelModal = new EventEmitter<void>();

  addingReview: boolean = false;

  newReviewForm: FormGroup = new FormGroup({
    comment: new FormControl(),
    rating: new FormControl(),
  });

  constructor(
    private placesFacade: PlacesFacade,
    private reviewService: ReviewService
  ) {}

  selectedView: string = 'general';

  addOrigin(place: Place) {
    const marker: Marker = { lat: place.xcoordinate, lng: place.ycoordinate };

    this.placesFacade.changeOrigin(marker);
  }

  addDestination(place: Place) {
    const marker: Marker = { lat: place.xcoordinate, lng: place.ycoordinate };

    this.placesFacade.changeDestination(marker);
  }

  submitReview() {
    const comment = this.newReviewForm.controls['comment'].value;
    const rating = this.newReviewForm.controls['rating'].value;
    const id = this.place.id.toString();

    const newReview = new UploadNewReview(comment, rating, id);

    this.reviewService.addReview(newReview).subscribe();

    this.addingReview = false;
  }

  toggleView(view: string): void {
    this.selectedView = view;
  }

  closeModal() {
    this.cancelModal.emit();
  }

  toggleAddReview() {
    this.addingReview = true;
  }

  cancelAddReview() {
    this.addingReview = false;
  }
}
