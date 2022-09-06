import {loadFavorite} from './favorite-process';
import {addFavorites} from './action-favorite';

describe(`Reducer work correctly`, () => {
  const initialState = {
    objFavorite: [],
  };
  it(`Reducer use no params`, () => {
    expect(loadFavorite(undefined, {})).toEqual(initialState);
  });
  it(`Reducer return favorite cards`, () => {
    const favor = {
      id: 1
    };
    expect(loadFavorite(initialState, addFavorites(favor))).toEqual({objFavorite: favor});
  });
});
