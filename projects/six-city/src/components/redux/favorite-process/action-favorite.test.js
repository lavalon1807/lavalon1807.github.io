import {addFavorites} from './action-favorite';
import {ActionType} from '../action';

it(`Action-favorite work correctly`, () => {
  const favor = {
    1: {id: 1},
    2: {id: 2}
  };

  const expectFavorites = {
    type: ActionType.ADD_FAVORITES,
    payload: favor,
  };

  expect(addFavorites(favor)).toEqual(expectFavorites);
});
