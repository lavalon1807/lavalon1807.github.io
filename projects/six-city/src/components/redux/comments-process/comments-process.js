import {ActionType} from '../action';

export const initialState = {
  loadComments: {},
};

export const loadComments = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        loadComments: {
          ...state.commentsMap,
          [action.meta]: action.payload,
        },
      };

    default: return state;
  }
};
