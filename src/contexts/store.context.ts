import { createContext, Dispatch } from 'react';

import { AppAction, AppState } from '../store/store.model';

export type StoreContextValue = [AppState, Dispatch<AppAction>];

const StoreContext = createContext<StoreContextValue>([[], () => undefined]);

export default StoreContext;
