import React, { FunctionComponent, useContext } from 'react';

import { createSpaceship } from '../store/spaceships/spaceships.actions';

import StoreContext from '../contexts/store.context';

import SpaceshipForm from '../components/SpaceshipForm';

const SpaceshipCreator: FunctionComponent = () => {
  const [spaceships, dispatch] = useContext(StoreContext);

  return (
    <SpaceshipForm
      onSubmit={data =>
        dispatch(
          createSpaceship({
            ...data,
            id: `${spaceships.length}`,
          }),
        )
      }
    />
  );
};

export default SpaceshipCreator;
