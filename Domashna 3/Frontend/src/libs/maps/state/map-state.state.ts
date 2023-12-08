import { Place } from '../models/map.models';

export const MAP_STORE_KEY = 'product-state';

export interface IMapState {
  places: Place[];
}

export const initialState: IMapState = {
  places: [],
};
