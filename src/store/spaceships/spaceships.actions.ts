import {
  Spaceship,
  SpaceshipData,
  SpaceshipActionType,
  SpaceshipCreated,
  SpaceshipUpdated,
  SpaceshipDeleted,
} from './spaceships.model';

export const createSpaceship = (spaceship: Spaceship): SpaceshipCreated => ({
  ...spaceship,
  type: SpaceshipActionType.SPACESHIP_CREATED,
});

export const updateSpaceship = (id: Spaceship['id']) => (
  data: Partial<SpaceshipData>,
): SpaceshipUpdated => ({
  ...data,
  id,
  type: SpaceshipActionType.SPACESHIP_UPDATED,
});

export const deleteSpaceship = (id: Spaceship['id']): SpaceshipDeleted => ({
  id,
  type: SpaceshipActionType.SPACESHIP_DELETED,
});
