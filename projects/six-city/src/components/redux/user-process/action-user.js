import {ActionType} from '../action';

export const requireAuthorization = (status, login) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
  payloadLogin: login,
});
