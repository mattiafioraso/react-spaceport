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
  SPACESHIP_STATE_SET = 'SPACESHIP_STATE_SET',
  SPACESHIP_CREATED = 'SPACESHIP_CREATED',
  SPACESHIP_UPDATED = 'SPACESHIP_UPDATED',
  SPACESHIP_DELETED = 'SPACESHIP_DELETED',
}

export interface SpaceshipsRepository {
  readonly getAll: () => Promise<SpaceshipsState>;
  readonly create: (spaceship: Spaceship) => Promise<void>;
  readonly update: (
    id: Spaceship['id'],
  ) => (data: Partial<SpaceshipData>) => Promise<void>;
  readonly delete: (id: Spaceship['id']) => Promise<void>;
}

export interface SpaceshipsStateSet
  extends Action<SpaceshipActionType.SPACESHIP_STATE_SET> {
  readonly spaceships: SpaceshipsState;
}

export type SpaceshipCreated = Action<SpaceshipActionType.SPACESHIP_CREATED> &
  Spaceship;

export type SpaceshipUpdated = Action<SpaceshipActionType.SPACESHIP_UPDATED> &
  Pick<Spaceship, 'id'> &
  Partial<SpaceshipData>;

export type SpaceshipDeleted = Action<SpaceshipActionType.SPACESHIP_DELETED> &
  Pick<Spaceship, 'id'>;

export type SpaceshipAction =
  | SpaceshipsStateSet
  | SpaceshipCreated
  | SpaceshipUpdated
  | SpaceshipDeleted;
