import React, { FunctionComponent } from 'react';

import {
  Card,
  CardContent,
  Typography,
  Theme,
  createStyles,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { SpaceshipData } from '../models/spaceship.model';

export type SpaceshipCardProps = SpaceshipData;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

const SpaceshipCard: FunctionComponent<SpaceshipCardProps> = ({
  name,
  category,
  color,
}) => {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.root }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>

        <Typography variant="caption">Category: </Typography>
        <Typography>{category}</Typography>

        <Typography variant="caption">Color: </Typography>
        <Typography>{color}</Typography>
      </CardContent>
    </Card>
  );
};

export default SpaceshipCard;
