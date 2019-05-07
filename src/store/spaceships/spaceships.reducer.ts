import { Reducer } from 'react';

import {
  SpaceshipsState,
  SpaceshipAction,
  SpaceshipActionType,
} from './spaceships.model';

export const spaceshipsReducer: Reducer<SpaceshipsState, SpaceshipAction> = (
  state = [],
  action,
) => {
  switch (action.type) {
    case SpaceshipActionType.SPACESHIP_STATE_SET: {
      return [...action.spaceships];
    }

    case SpaceshipActionType.SPACESHIP_CREATED: {
      const { type, ...spaceship } = action;

      return [...state, spaceship];
    }

    case SpaceshipActionType.SPACESHIP_UPDATED: {
      const { type, id, ...data } = action;

      return state.map(spaceship =>
        spaceship.id === id ? { ...spaceship, ...data } : spaceship,
      );
    }

    case SpaceshipActionType.SPACESHIP_DELETED: {
      return state.filter(({ id }) => id !== action.id);
    }

    default: {
      return state;
    }
  }
};
