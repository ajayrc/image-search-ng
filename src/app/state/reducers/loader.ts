import {
  ActionReducer,
  createReducer,
  on
} from '@ngrx/store';
import { loaderStartAction, loaderStopAction } from '../actions/loader.actions';

export interface LoaderState {
  isLoading: boolean
}

export const loaderState: LoaderState = {
  isLoading: false
};

export const loaderReducer: ActionReducer<LoaderState> = createReducer(
  loaderState,
  on(loaderStartAction, (_state) => ({ isLoading: true })),
  on(loaderStopAction, (_state) => ({ isLoading: false })),
);
