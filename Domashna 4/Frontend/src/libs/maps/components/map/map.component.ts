import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/map.models';
import { LocationDetailsComponent } from '../location-details/location-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, catchError, map, of } from 'rxjs';
import { PlacesFacade } from '../../state/map-state.facade';
import { MapDirectionsService } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export default class MapComponent implements OnInit {
  apiLoaded: Observable<boolean>;

  locations: Place[] = [];
  cities: string[] = [];
  mapLoaded: boolean = false;

  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(41.6086, 21.7453),
    disableDefaultUI: true,
  };

  request: google.maps.DirectionsRequest | null = null;

  directionsResults$: Observable<
    google.maps.DirectionsResult | null | undefined
  > = of(null);

  constructor(
    public modalService: NgbModal,
    private placesFacade: PlacesFacade,
    private mapDirectionsService: MapDirectionsService,
    httpClient: HttpClient
  ) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyA1oO9jfpESXYSJOR6b2UUWAO2szfXc040',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
    setTimeout(() => {
      this.placesFacade.getRoute().subscribe((route) => {
        this.request = route;

        this.directionsResults$ = this.mapDirectionsService
          .route(this.request)
          .pipe(map((response) => response.result));
      });
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.placesFacade.getPlaces().subscribe((x) => {
        this.locations = x;
        this.mapLoaded = true;
      });
    });
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
}
