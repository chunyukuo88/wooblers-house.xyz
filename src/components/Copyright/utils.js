import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';

export const copyrightStringHandler = (dispatch, history) => {
  dispatch(goToPage(routes.admin, history));
};
