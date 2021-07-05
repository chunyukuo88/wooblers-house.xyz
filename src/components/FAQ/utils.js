import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';

export const backButtonHandler = (dispatch, history) => {
  dispatch(goToPage(routes.index, history));
};
