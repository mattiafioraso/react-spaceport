import React, { FunctionComponent, useContext } from 'react';

import { RouteComponentProps, Redirect } from 'react-router';

import { updateSpaceship } from '../store/spaceships/spaceships.actions';

import StoreContext from '../contexts/store.context';

import SpaceshipForm from '../components/SpaceshipForm';

export interface SpaceshipEditorRouteParams {
  readonly id: string;
}

export type SpaceshipEditorProps = RouteComponentProps<
  SpaceshipEditorRouteParams
>;

const SpaceshipEditor: FunctionComponent<SpaceshipEditorProps> = ({
  match: {
    params: { id },
  },
}) => {
  const [spaceships, dispatch] = useContext(StoreContext);

  const spaceship = spaceships.find(spaceship => spaceship.id === id);

  return typeof spaceship === 'object' && spaceship !== null ? (
    <SpaceshipForm
      key={id}
      initialName={spaceship.name}
      initialColor={spaceship.color}
      initialCategory={spaceship.category}
      onSubmit={data => dispatch(updateSpaceship(id)(data))}
    />
  ) : (
    <Redirect to="../" />
  );
};

export default SpaceshipEditor;
