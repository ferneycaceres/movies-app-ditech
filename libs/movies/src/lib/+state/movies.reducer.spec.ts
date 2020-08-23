import { MoviesEntity } from './movies.models';
import * as MoviesActions from './movies.actions';
import { State, initialState, reducer } from './movies.reducer';

describe('Movies Reducer', () => {
  const createMoviesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MoviesEntity);

  beforeEach(() => {});

  describe('valid Movies actions', () => {
    it('loadMoviesSuccess should return set the list of known Movies', () => {
      const movies = [createMoviesEntity('PRODUCT-AAA'), createMoviesEntity('PRODUCT-zzz')];
      const action = MoviesActions.loadMoviesSuccess({ movies });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
