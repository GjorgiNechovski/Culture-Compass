import { createAction, props } from '@ngrx/store';
import { Place } from '../models/map.models';

export const fetchPlaces = createAction(
  '[Map] Fetch Places',
  props<{ filter: string | null }>()
);

export const fetchPlacesSuccess = createAction(
  '[Map] Fetch Products Success',
  props<{ places: Place[] }>()
);
