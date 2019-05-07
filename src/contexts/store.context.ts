import { createContext, Dispatch } from 'react';

import { Action } from '../store/action.model';

import { AppAction, AppState, AppDependencies } from '../store/store.model';

export type Thunk<S = any, A extends Action = Action, D = any> = (
  dispatch: Dispatch<A>,
  getState: () => S,
  extra: D,
) => ReturnType<Dispatch<A>>;

export type StoreContextValue = [
  AppState,
  Dispatch<AppAction | Thunk<AppState, AppAction, AppDependencies>>
];

const StoreContext = createContext<StoreContextValue>([[], () => undefined]);

export default StoreContext;
