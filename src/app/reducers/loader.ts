import {
  ActionReducer,
  createReducer,
  on
} from '@ngrx/store';
import { loaderStartAction, loaderStopAction } from '../actions/loader.actions';

export interface LoaderState {
  loader: boolean
}

export const loaderState: LoaderState = {
  loader: true
};

export const loaderReducer: ActionReducer<LoaderState> = createReducer(
  loaderState,
  on(loaderStartAction, (_state) => ({ loader: true })),
  on(loaderStopAction, (_state) => ({ loader: false })),
);
