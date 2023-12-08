import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMapState, MAP_STORE_KEY } from './map-state.state';

const state = createFeatureSelector<IMapState>(MAP_STORE_KEY);

export const placesState = createSelector(
  state,
  (state1: IMapState) => state1.places
);
