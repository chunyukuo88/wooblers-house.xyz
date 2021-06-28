import { GO_TO_PAGE } from '../actions/types';

const defaultState = {
  globalNavLocation: '/',
};

export default function navigationReducer (state = defaultState, action) {
  switch (action.type) {
    case GO_TO_PAGE: return action.payload;
    default: return state;
  }
}
