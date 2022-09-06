import {ActionType} from '../action';

const initialState = {
  objFavorite: [],
};

export const loadFavorite = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_FAVORITES:
      return {
        ...state,
        objFavorite: action.payload,
      };

    default: return state;
  }
};
