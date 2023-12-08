import { createReducer, on } from '@ngrx/store';
import * as MapActions from './map-state.actions';
import { initialState } from './map-state.state';

export const MapReducer = createReducer(
  initialState,
  on(MapActions.fetchPlacesSuccess, (state, { places }) => {
    return {
      ...state,
      places: places,
    };
  })
);
