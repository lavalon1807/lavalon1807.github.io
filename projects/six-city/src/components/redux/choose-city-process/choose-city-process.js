import {ActionType} from '../action';

const initialState = {
  currentCity: `Paris`,
};

export const chooseCity = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSE_CITY:
      return {...state, currentCity: action.payload};

    default: return state;
  }
};
