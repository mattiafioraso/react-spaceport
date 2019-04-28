import React, { FunctionComponent, ReactNode } from 'react';

import {
  Card,
  CardContent,
  Typography,
  Theme,
  createStyles,
  CardActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { SpaceshipData } from '../store/spaceships/spaceships.model';

export interface SpaceshipCardProps extends SpaceshipData {
  readonly actions?: ReactNode;
}

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
  actions = null,
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
      <CardActions>{actions}</CardActions>
    </Card>
  );
};

export default SpaceshipCard;
