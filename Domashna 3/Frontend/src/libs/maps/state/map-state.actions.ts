import { createAction, props } from '@ngrx/store';
import { Marker, Place } from '../models/map.models';

export const fetchPlaces = createAction(
  '[Map] Fetch Places',
  props<{ filter: string | null }>()
);

export const fetchPlacesSuccess = createAction(
  '[Map] Fetch Products Success',
  props<{ places: Place[] }>()
);

export const changeToRoute = createAction(
  '[Map] Change To',
  props<{ destination: Marker }>()
);

export const changeFromRoute = createAction(
  '[Map] Change From',
  props<{ origin: Marker }>()
);
