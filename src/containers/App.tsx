import React, { FunctionComponent } from 'react';

import { CssBaseline } from '@material-ui/core';

import Spaceship from '../components/Spaceship';

const App: FunctionComponent = () => {
  return (
    <>
      <CssBaseline />
      <Spaceship name="Enterprise" category="cargo" color="gray" />
    </>
  );
};

export default App;
