import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { storeFreeze } from 'ngrx-store-freeze';

import * as loaderStorage from './loader';
import * as imagesStorage from './images';
import * as favListStoare from './favorites';

export interface State {
  loader: loaderStorage.LoaderState;
  images: imagesStorage.ImagesState;
  favList: favListStoare.FavoritesState;
}

export const reducers: ActionReducerMap<State> = {
  loader: loaderStorage.loaderReducer,
  images: imagesStorage.imagesReducer,
  favList: favListStoare.favListReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];
