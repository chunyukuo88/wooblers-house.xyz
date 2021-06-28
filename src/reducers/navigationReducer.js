import { GO_TO_PAGE } from '../actions/types';
import { routes } from '../routes';

const defaultState = {
  globalNavLocation: routes.index,
};

export default function navigationReducer (state = defaultState, action) {
  switch (action.type) {
    case GO_TO_PAGE: return action.payload;
    default: return state;
  }
}
