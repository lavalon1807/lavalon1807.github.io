import {ActionType} from '../action';

export const actionCity = (cityRich) => ({
  type: ActionType.CHOOSE_CITY,
  payload: cityRich
});
