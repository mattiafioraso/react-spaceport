import { Action } from '../action.model';

export enum SpaceshipCategory {
  FIGHTER = 'FIGHTER',
  CARGO = 'CARGO',
  CIVILIAN = 'CIVILIAN',
}

export interface Spaceship {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  readonly category: SpaceshipCategory;
}

export type SpaceshipData = Pick<Spaceship, Exclude<keyof Spaceship, 'id'>>;

export type SpaceshipsState = readonly Spaceship[];

export enum SpaceshipActionType {
  SPACESHIP_CREATED = 'SPACESHIP_CREATED',
  SPACESHIP_UPDATED = 'SPACESHIP_UPDATED',
  SPACESHIP_DELETED = 'SPACESHIP_DELETED',
}

export type SpaceshipCreated = Action<SpaceshipActionType.SPACESHIP_CREATED> &
  Spaceship;

export type SpaceshipUpdated = Action<SpaceshipActionType.SPACESHIP_UPDATED> &
  Pick<Spaceship, 'id'> &
  Partial<SpaceshipData>;

export type SpaceshipDeleted = Action<SpaceshipActionType.SPACESHIP_DELETED> &
  Pick<Spaceship, 'id'>;

export type SpaceshipAction =
  | SpaceshipCreated
  | SpaceshipUpdated
  | SpaceshipDeleted;
