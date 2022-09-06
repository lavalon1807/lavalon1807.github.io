import {ActionType} from '../action';

export const loadComments = (comments, id) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
  meta: id,
});
