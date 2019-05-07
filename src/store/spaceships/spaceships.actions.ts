import {
  Spaceship,
  SpaceshipData,
  SpaceshipActionType,
  SpaceshipCreated,
  SpaceshipUpdated,
  SpaceshipDeleted,
  SpaceshipsRepository,
  SpaceshipsStateSet,
} from './spaceships.model';

import { Thunk } from '../../contexts/store.context';

import { AppState } from '../store.model';

export const initSpaceshipsState = (): Thunk<
  AppState,
  SpaceshipsStateSet,
  SpaceshipsRepository
> => async (dispatch, getState, repository) => {
  dispatch({
    spaceships: await repository.getAll(),
    type: SpaceshipActionType.SPACESHIP_STATE_SET,
  });
};

export const createSpaceship = (
  spaceship: Spaceship,
): Thunk<AppState, SpaceshipCreated, SpaceshipsRepository> => async (
  dispatch,
  getState,
  repository,
) => {
  repository.create(spaceship);

  dispatch({
    ...spaceship,
    type: SpaceshipActionType.SPACESHIP_CREATED,
  });
};

export const updateSpaceship = (id: Spaceship['id']) => (
  data: Partial<SpaceshipData>,
): Thunk<AppState, SpaceshipUpdated, SpaceshipsRepository> => async (
  dispatch,
  getState,
  repository,
) => {
  repository.update(id)(data);

  dispatch({
    id,
    ...data,
    type: SpaceshipActionType.SPACESHIP_UPDATED,
  });
};

export const deleteSpaceship = (
  id: Spaceship['id'],
): Thunk<AppState, SpaceshipDeleted, SpaceshipsRepository> => async (
  dispatch,
  getState,
  repository,
) => {
  repository.delete(id);

  dispatch({
    id,
    type: SpaceshipActionType.SPACESHIP_DELETED,
  });
};
