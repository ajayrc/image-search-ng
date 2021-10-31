import { createAction, props } from '@ngrx/store';
import { Favorite } from '../model/favorites';
import { Photo } from '../model/flickr-images';

const FAVOURITES = 'FAVOURITES_ACTION';

export const favListGetAction = createAction(`[${FAVOURITES}] Get Favorites`); // get all fav list and images in it
export const favListCreateAction = createAction(
  `[${FAVOURITES}] Create A Favorite List`,
  props<{ favItem: Favorite }>()
); // create a new fav list
export const favListUpdateAction = createAction(
  `[${FAVOURITES}] Change Details of A Favorite List`,
  props<{ favItem: Favorite }>()
); // update name/description of an existint list
export const favListAddImageAction = createAction(
  `[${FAVOURITES}] Add Image To A Favorite List`,
  props<{ favItem: Favorite; image: Photo }>()
); // add new image to existing fav list
