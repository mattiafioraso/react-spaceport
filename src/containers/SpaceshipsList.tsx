import React, { FunctionComponent, useContext } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { List, ListItem, Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

import StoreContext from '../contexts/store.context';

import SpaceshipCard from '../components/SpaceshipCard';
import { deleteSpaceship } from '../store/spaceships/spaceships.actions';

const SpaceshipsList: FunctionComponent = () => {
  const [spaceships, dispatch] = useContext(StoreContext);

  return (
    <List>
      {spaceships.map(({ id, ...props }) => {
        const SpaceshipDetailLink = (props: ButtonProps) => (
          <RouterLink {...props} to={`/${id}`} />
        );

        const actions = (
          <>
            <Button component={SpaceshipDetailLink}>Details</Button>
            <Button
              color="secondary"
              onClick={() => dispatch(deleteSpaceship(id))}
            >
              Delete
            </Button>
          </>
        );

        return (
          <ListItem disableGutters key={id}>
            <SpaceshipCard {...props} actions={actions} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default SpaceshipsList;
