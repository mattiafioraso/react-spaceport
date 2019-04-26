import React, { FunctionComponent } from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

export interface SpaceshipProps {
  readonly name: string;
  readonly color: string;
  readonly category: 'fighter' | 'cargo' | 'civilian';
}

const Spaceship: FunctionComponent<SpaceshipProps> = ({
  name,
  category,
  color,
}) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{name}</Typography>

      <ul>
        <li>Category: {category}</li>
        <li>Color: {color}</li>
      </ul>
    </CardContent>
  </Card>
);

export default Spaceship;
