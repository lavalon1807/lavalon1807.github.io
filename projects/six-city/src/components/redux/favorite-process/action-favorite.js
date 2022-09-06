import {ActionType} from '../action';

export const addFavorites = (favor) => ({
  type: ActionType.ADD_FAVORITES,
  payload: favor,
});
