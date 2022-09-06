import {ActionType} from '../action';
import {loadComments, initialState} from './comments-process';

describe(`Reduce work correctly`, () => {
  it(`Reducer should add null comment`, () => {
    expect(loadComments(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should add comments`, () => {
    const actionComments = (comments, id) => ({
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
      meta: id,
    });

    expect(loadComments(initialState, actionComments(`some talk`, 1)))
      .toEqual({
        loadComments: {
          1: `some talk`,
        },
      });
  });
});
