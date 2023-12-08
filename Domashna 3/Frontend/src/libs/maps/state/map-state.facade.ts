import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMapState } from './map-state.state';

import * as MapActions from './map-state.actions';
import * as MapSelectors from './map-state.selectors';
import { Observable, filter } from 'rxjs';
import { Place } from '../models/map.models';

@Injectable({
  providedIn: 'root',
})
export class PlacesFacade {
  public constructor(private readonly store: Store<IMapState>) {}

  public fetchPlaces(filter: string | null = null): void {
    this.store.dispatch(MapActions.fetchPlaces({ filter: filter }));
  }

  public getPlaces(): Observable<Place[]> {
    return this.store
      .select(MapSelectors.placesState)
      .pipe(filter((x): x is Place[] => !!x));
  }
}
