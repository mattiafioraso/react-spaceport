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
