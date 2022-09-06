import {ActionType} from '../action';
import {userAuth} from '../../../mocks/constants';

export const initialState = {
  authorizationStatus: userAuth.NO_AUTH,
  login: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
        login: action.payloadLogin,
      };

    default: return state;
  }
};
