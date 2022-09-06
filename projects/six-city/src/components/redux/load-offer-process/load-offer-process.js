import {ActionType} from '../action';

export const initialState = {
  data: {},
  city: {},
  isDataLoaded: false,
  oneOffer: {},
  isLoaded: false,
  sentence: [],
};

export const loadOffer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_DATA:
      return {
        ...state,
        city: action.payloadCity,
        data: action.payloadData,
        isDataLoaded: true,
      };

    case ActionType.LOAD_OFFER:
      return {
        ...state,
        oneOffer: action.payload,
        isLoaded: true,
      };

    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        sentence: action.payload,
      };

    default: return state;
  }
};
