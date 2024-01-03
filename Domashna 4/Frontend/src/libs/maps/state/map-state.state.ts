import { Place } from '../models/map.models';

export const MAP_STORE_KEY = 'product-state';

export interface IMapState {
  places: Place[];
  directionsService: google.maps.DirectionsService;
  directionsDisplay: google.maps.DirectionsRenderer;
  route: google.maps.DirectionsRequest;
  cities: string[];
}

export const initialState: IMapState = {
  places: [],
  directionsService: new google.maps.DirectionsService(),
  directionsDisplay: new google.maps.DirectionsRenderer(),
  route: {
    destination: { lat: 0, lng: 0 },
    origin: { lat: 0, lng: 0 },
    travelMode: google.maps.TravelMode.DRIVING,
  },
  cities: [],
};
