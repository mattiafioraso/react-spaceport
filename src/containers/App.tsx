import React, { FunctionComponent, useState } from 'react';

import { CssBaseline, createMuiTheme, List, ListItem } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

import { Spaceship } from '../models/spaceship.model';

import Frame from '../components/Frame';
import SpaceshipCard from '../components/SpaceshipCard';
import SpaceshipForm from '../components/SpaceshipForm';

export type AppState = readonly Spaceship[];

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
  const [spaceships, setSpaceships] = useState<AppState>([]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Frame
          master={
            <List>
              {spaceships.map(({ id, ...props }) => (
                <ListItem disableGutters key={id}>
                  <SpaceshipCard {...props} />
                </ListItem>
              ))}
            </List>
          }
          detail={
            <SpaceshipForm
              onSubmit={data =>
                setSpaceships([
                  ...spaceships,
                  { ...data, id: `${spaceships.length}` },
                ])
              }
            />
          }
        />
      </ThemeProvider>
    </>
  );
};

export default App;
