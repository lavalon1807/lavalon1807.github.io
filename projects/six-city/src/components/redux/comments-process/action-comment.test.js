import {loadComments} from './action-comments';
import {ActionType} from '../action';

it(`Action comments work correctly`, () => {
  const comments = {
    allComments: `My name is Bill Turner`
  };

  const id = {
    payload: 1
  };

  const expectloadComments = {
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
    meta: id,
  };
  expect(loadComments(comments, id)).toEqual(expectloadComments);
});
