import { createAction, props } from '@ngrx/store';
import { Photo } from '../model/flickr-images';

const IMAGES = 'IMAGES_ACTION';

export const imagesGetAction = createAction(`[${IMAGES}] Get Images`, props<{userInput: string}>());
export const imagesReceivedAction = createAction(`[${IMAGES}] Images Received`, props<{imagesResult: Photo[]}>());
