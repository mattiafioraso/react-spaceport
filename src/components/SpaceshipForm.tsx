import React, { FunctionComponent, useState } from 'react';

import {
  TextField,
  MenuItem,
  Button,
  Theme,
  Typography,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

import {
  SpaceshipCategory,
  Spaceship,
  SpaceshipData,
} from '../models/spaceship.model';

export interface SpaceshipFormProps {
  readonly initialName?: Spaceship['name'];
  readonly initialColor?: Spaceship['color'];
  readonly initialCategory?: Spaceship['category'];

  readonly onSubmit?: (data: SpaceshipData) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        marginBottom: theme.spacing.unit * 2,
      },
    },
    title: {
      marginBottom: theme.spacing.unit * 2,
    },
  }),
);

const SpaceshipForm: FunctionComponent<SpaceshipFormProps> = ({
  initialName = '',
  initialColor = '',
  initialCategory = SpaceshipCategory.FIGHTER,
  onSubmit,
}) => {
  const classes = useStyles();

  const [name, setName] = useState(initialName);

  const [color, setColor] = useState(initialColor);

  const [category, setCategory] = useState(initialCategory);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        setName(initialName);
        setColor(color);
        setCategory(category);

        return (
          typeof onSubmit === 'function' && onSubmit({ name, color, category })
        );
      }}
    >
      <Card>
        <CardContent className={classes.content}>
          <Typography variant="h4" className={classes.title}>
            {initialName || 'New spaceship'}
          </Typography>

          <TextField
            label="Name"
            variant="filled"
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <TextField
            label="Category"
            variant="filled"
            required
            select
            value={category}
            onChange={event =>
              setCategory(event.target.value as SpaceshipCategory)
            }
          >
            {Object.entries(SpaceshipCategory).map(([key, value]) => (
              <MenuItem key={key} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </CardContent>
        <CardActions>
          <Button type="submit">Save</Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default SpaceshipForm;
