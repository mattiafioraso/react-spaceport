import {
  SpaceshipsState,
  SpaceshipAction,
  SpaceshipsRepository,
} from './spaceships/spaceships.model';

export type AppState = SpaceshipsState;

export type AppAction = SpaceshipAction;

export type AppDependencies = SpaceshipsRepository;
