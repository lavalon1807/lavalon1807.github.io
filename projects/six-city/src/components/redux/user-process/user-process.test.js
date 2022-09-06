import MockAdapter from 'axios-mock-adapter';
import {auth, initialState} from './user-process';
import {userAuth} from '../../../mocks/constants';
import {ActionType} from '../action';
import {createAPI} from '../../api';
import {checkAuth, login} from '../api-create';

const api = createAPI(() => {});

describe(`Reducer auth work correctly`, () => {
  it(`Reducer without params`, () => {
    expect(auth(undefined, {})).toEqual(initialState);
  });

  it(`Reducer auth load`, () => {
    const authorizationStatus = true;

    const requireAuthorization = (status2) => ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status2,
      payloadLogin: login,
    });

    expect(auth(initialState, requireAuthorization(authorizationStatus, login)))
      .toEqual({authorizationStatus, login});
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to ALL /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: userAuth.NO_AUTH,
        });
      });
  });

  it(`Should make a load correct API call to ALL /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `12345`};
    const checkAuthLoader = login(fakeUser);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: userAuth.AUTH,
        });
      });
  });

});
