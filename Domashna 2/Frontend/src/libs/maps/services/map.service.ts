import { Injectable } from '@angular/core';
import { Location } from '../models/map.models';
import locations from '../models/hardcoded.models';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor() {}

  getLocations(): Location[] {
    return locations;
  }
}
