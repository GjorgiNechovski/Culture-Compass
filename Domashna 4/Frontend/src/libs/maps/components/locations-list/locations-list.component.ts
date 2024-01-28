import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlacesFacade } from '../../state/map-state.facade';
import { Place } from '../../models/map.models';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationDetailsComponent } from '../location-details/location-details.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LocationsListComponent implements OnInit {
  places: Place[] = [];
  cities: string[] = [];

  constructor(
    private placesFacade: PlacesFacade,
    private router: Router,
    public modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.placesFacade.getPlaces().subscribe((x) => (this.places = x));
    this.placesFacade.getCities().subscribe((x) => (this.cities = x));
  }

  openLocationDetails(location: Place) {
    const modalRef = this.modalService.open(LocationDetailsComponent, {
      size: 'lg',
      windowClass: 'modal-class',
    });
    modalRef.componentInstance.place = location;

    modalRef.componentInstance.cancelModal.subscribe(() => {
      modalRef.close();
    });
  }

  goToMap() {
    this.router.navigate(['/map']);
  }
}
