import React, {
  FunctionComponent,
  useReducer,
  useEffect,
  useCallback,
  useState,
} from 'react';

import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, createMuiTheme } from '@material-ui/core';
import { deepPurple, yellow } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

import StoreContext, { Thunk } from '../contexts/store.context';

import { spaceshipsReducer } from '../store/spaceships/spaceships.reducer';

import Frame from '../components/Frame';

import SpaceshipsList from './SpaceshipsList';
import SpaceshipDetail from './SpaceshipDetail';

import { AppAction, AppDependencies, AppState } from '../store/store.model';

import { createSpaceshipsRepository } from '../data/repositories/spaceships.repository';
import { initSpaceshipsState } from '../store/spaceships/spaceships.actions';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepPurple,
    secondary: yellow,
  },
  typography: {
    useNextVariants: true,
  },
});

const dependencies: AppDependencies = createSpaceshipsRepository();

const App: FunctionComponent = () => {
  const [storeReady, setStoreReady] = useState(false);

  const [state, dispatch] = useReducer(spaceshipsReducer, []);

  const augmentedDispatch = useCallback(
    async (action: AppAction | Thunk<AppState, AppAction, AppDependencies>) => {
      const getState = () => state;

      return typeof action === 'function'
        ? action(dispatch, getState, dependencies)
        : dispatch(action);
    },
    [dispatch, state],
  );

  useEffect(() => {
    if (!storeReady) {
      augmentedDispatch(initSpaceshipsState()).then(() => setStoreReady(true));
    }
  }, [storeReady, augmentedDispatch]);

  return (
    <>
      <CssBaseline />
      <StoreContext.Provider value={[state, augmentedDispatch]}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            {storeReady && (
              <Frame master={<SpaceshipsList />} detail={<SpaceshipDetail />} />
            )}
          </BrowserRouter>
        </ThemeProvider>
      </StoreContext.Provider>
    </>
  );
};

export default App;
