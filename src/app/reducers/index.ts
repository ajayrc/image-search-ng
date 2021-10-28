import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment.prod";

import * as loaderStorage from './loader';
import * as imagesStorage from './images';

export interface State {
  loader: loaderStorage.LoaderState,
  images: imagesStorage.ImagesState
}

export const reducers: ActionReducerMap<State> = {
  loader: loaderStorage.loaderReducer,
  images: imagesStorage.imagesReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
