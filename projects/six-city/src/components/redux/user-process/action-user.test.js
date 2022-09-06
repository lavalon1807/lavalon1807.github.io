import {requireAuthorization} from './action-user';
import {ActionType} from '../action';

it(`Action user work correctly`, () => {
  const login = {
    email: `cost_benefit@mail.ru`
  };
  const expectAuthorisation = {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: true,
    payloadLogin: login,
  };
  expect(requireAuthorization(true, login)).toEqual(expectAuthorisation);
});
