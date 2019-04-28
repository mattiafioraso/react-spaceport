import React, { FunctionComponent } from 'react';

import { Switch, Route, Redirect } from 'react-router';

import SpaceshipEditor from './SpaceshipEditor';
import SpaceshipCreator from './SpaceshipCreator';

const SpaceshipDetail: FunctionComponent = () => (
  <Switch>
    <Route path="/new" component={SpaceshipCreator} />
    <Route path="/:id" component={SpaceshipEditor} />
    <Redirect to="/new" />
  </Switch>
);

export default SpaceshipDetail;
