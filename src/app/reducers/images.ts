import {
  ActionReducer,
  createReducer,
  on
} from '@ngrx/store';
import { imagesGetAction, imagesReceivedAction } from '../actions/images.actions';
import { Photo } from '../model/flickr-images';

export interface ImagesState {
  images: Photo[]
}

export const imagesState: ImagesState = {
  images: []
};

export const imagesReducer: ActionReducer<ImagesState> = createReducer(
  imagesState,
  on(imagesGetAction, (_state) => _state),
  on(imagesReceivedAction, (_state, {imagesResult}) => ({ images: imagesResult }))
  );
