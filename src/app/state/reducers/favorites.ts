import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  favListAddImageAction,
  favListCreateAction,
  favListGetAction,
} from '../actions/favlist.actions';
import { Favourite } from '../model/favorites';
import { Photo } from '../model/flickr-images';

export interface FavoritesState {
  favList: Favourite[];
}

export const favListState: FavoritesState = {
  favList: [],
};

export const favListReducer: ActionReducer<FavoritesState> = createReducer(
  favListState,
  on(favListGetAction, (_state) => _state),
  on(favListCreateAction, (_state, { favItem }) => {
    const tmpFavs: Favourite[] = Array.from(_state.favList); // create new state
    tmpFavs.push(favItem);
    return { favList: tmpFavs };
  }),
  on(favListAddImageAction, (_state, { favItem, image }) => {
    let tmpFavs: Favourite[] = Array.from(_state.favList); // create shallow copy
    let favImagaes: Photo[];

    tmpFavs = tmpFavs.map((item) => {
      if (item.id === favItem.id) {
        // only pick selected list
        favImagaes = item.images ? Array.from(item.images) : []; // create copy of child object
        favImagaes.push(image);
        return {
          ...item,
          images: favImagaes, // overwrite images on rest of the object
        };
      } else {
        return {
          ...item,
        };
      }
    });

    return { favList: tmpFavs };
  })
);
