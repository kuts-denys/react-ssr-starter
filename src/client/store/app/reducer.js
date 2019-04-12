/* eslint-disable no-param-reassign */
import { produce } from 'immer/dist/immer';
import { ActionTypes } from './actions';

export const initialState = Object.freeze({
  locale: 'en_US',
});

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case ActionTypes.SETLOCALE: {
        draft.locale = payload;
        break;
      }
      default: {
        return draft;
      }
    }
  });
