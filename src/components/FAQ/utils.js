import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';

const categoryStr = 'Click - Navigation';
const actionStr = 'User navigated to main page from FAQ page.';

export const backButtonHandler = (dispatch, history) => {
  fireGoogleAnalyticsEvent(categoryStr, actionStr);
  dispatch(goToPage(routes.index, history));
};
