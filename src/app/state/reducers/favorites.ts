import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  favListAddImageAction,
  favListCreateAction,
  favListGetAction,
  favListUpdateAction,
} from '../actions/favlist.actions';
import { Favorite } from '../model/favorites';
import { Photo } from '../model/flickr-images';

export interface FavoritesState {
  favList: Favorite[];
}

export const favListState: FavoritesState = {
  favList: [
    {
      id: 0,
      title: 'My Favs',
      description: 'Default list for your favorite images',
    },
  ],
};

export const favListReducer: ActionReducer<FavoritesState> = createReducer(
  favListState,
  on(favListGetAction, (_state) => _state),
  on(favListCreateAction, (_state, { favItem }) => {
    const tmpFavs: Favorite[] = Array.from(_state.favList); // create new state
    tmpFavs.push(favItem);
    return { favList: tmpFavs };
  }),
  on(favListUpdateAction, (_state, { favItem }) => {
    let tmpFavs: Favorite[] = Array.from(_state.favList); // create new state
    tmpFavs = tmpFavs.map((item: Favorite) => {
      if (item.id === favItem.id) {
        item = Object.assign({}, favItem); // create copy
      }
      return item;
    });

    return { favList: tmpFavs };
  }),
  on(favListAddImageAction, (_state, { favItem, image }) => {
    let tmpFavs: Favorite[] = Array.from(_state.favList); // create shallow copy
    let favImagaes: Photo[];

    tmpFavs = tmpFavs.map((item) => {
      if (item.id === favItem.id) {
        // only pick selected list
        favImagaes = item.images ? Array.from(item.images) : []; // create copy of child object
        if (
          !favImagaes.find(
            (existingImage: Photo) => image.id === existingImage.id
          )
        ) {
          // add only if not existing already
          favImagaes.push(image);
        }
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
