import { createAction } from '@ngrx/store';

const LOADER = 'LOADER_ACTION';

export const loaderStartAction = createAction(`[${LOADER}] Start`);
export const loaderStopAction = createAction(`[${LOADER}] Stop`);
