import React, { FunctionComponent, useReducer } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, createMuiTheme } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

import StoreContext from '../contexts/store.context';

import { spaceshipsReducer } from '../store/spaceships/spaceships.reducer';

import Frame from '../components/Frame';

import SpaceshipsList from './SpaceshipsList';
import SpaceshipDetail from './SpaceshipDetail';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue,
    secondary: orange,
  },
  typography: {
    useNextVariants: true,
  },
});

const App: FunctionComponent = () => {
  const store = useReducer(spaceshipsReducer, []);

  return (
    <>
      <CssBaseline />
      <StoreContext.Provider value={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Frame master={<SpaceshipsList />} detail={<SpaceshipDetail />} />
          </BrowserRouter>
        </ThemeProvider>
      </StoreContext.Provider>
    </>
  );
};

export default App;
