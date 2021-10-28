import { createAction, props } from '@ngrx/store';
import { Favourite } from '../model/favorites';
import { Photo } from '../model/flickr-images';

const FAVOURITES = 'FAVOURITES_ACTION';

export const favListGetAction = createAction(`[${FAVOURITES}] Get Favourites`); // get all fav list and images in it
export const favListCreateAction = createAction(`[${FAVOURITES}] Create A Favourite List`, props<{favItem: Favourite}>()); // create a new fav list

export const favListAddImageAction = createAction(`[${FAVOURITES}] Add Image To A Favourite List`, props<{favItem: Favourite, image: Photo}>()); // add new image to existing fav list
