import {
  SpaceshipsState,
  SpaceshipsRepository,
} from '../../store/spaceships/spaceships.model';

export const createSpaceshipsRepository = (): SpaceshipsRepository => {
  const storeSpaceships = (spaceships: SpaceshipsState) => {
    window.localStorage.setItem('spaceships', JSON.stringify(spaceships));
  };

  const retrieveSpaceships = (): SpaceshipsState => {
    const encodedSpaceships = window.localStorage.getItem('spaceships');

    try {
      return typeof encodedSpaceships === 'string'
        ? JSON.parse(encodedSpaceships)
        : [];
    } catch {
      return [];
    }
  };

  return {
    getAll: async () => retrieveSpaceships(),
    create: async spaceship =>
      storeSpaceships([...retrieveSpaceships(), spaceship]),
    update: id => async data =>
      storeSpaceships(
        retrieveSpaceships().map(spaceship =>
          spaceship.id === id ? { ...spaceship, ...data } : spaceship,
        ),
      ),
    delete: async id => {
      storeSpaceships(
        retrieveSpaceships().filter(spaceship => spaceship.id !== id),
      );
    },
  };
};
