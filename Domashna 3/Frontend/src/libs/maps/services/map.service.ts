import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { appApi } from '../../../app/const-variables.models';
import { HttpClient } from '@angular/common/http';
import { Place } from '../models/map.models';
import locations from '../models/hardcoded.models';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient) {}

  getLocations(filter: string | null): Observable<Place[]> {
    if (filter != null) {
      return this.http.get<any[]>(appApi + '/places?' + filter).pipe(
        map((apiResponse: any[]) => {
          return apiResponse.map((apiLocation: any) => {
            return new Place(
              apiLocation.id,
              apiLocation.name,
              apiLocation.city,
              apiLocation.xcoordinate,
              apiLocation.ycoordinate,
              apiLocation.hasEntranceFee,
              apiLocation.website,
              apiLocation.openingHours,
              apiLocation.phoneNumber,
              apiLocation.type
            );
          });
        })
      );
    }
    return this.http.get<any[]>(appApi + '/places').pipe(
      map((apiResponse: any[]) => {
        return apiResponse.map((apiLocation: any) => {
          return new Place(
            apiLocation.id,
            apiLocation.name,
            apiLocation.city,
            apiLocation.xcoordinate,
            apiLocation.ycoordinate,
            apiLocation.hasEntranceFee,
            apiLocation.website,
            apiLocation.openingHours,
            apiLocation.phoneNumber,
            apiLocation.type
          );
        });
      })
    );
  }
}
