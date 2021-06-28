import * as types from './types';

export function goToPage(page, history) {
  history.push(page)
  return {
    type: types.GO_TO_PAGE,
    payload: page
  };
}
