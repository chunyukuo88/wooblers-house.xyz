import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';

const categoryStr = 'Click - Navigation';
const actionStr = 'User navigated to FAQ page.';

export const faqButtonHandler = (dispatch, history) => {
  fireGoogleAnalyticsEvent(categoryStr, actionStr);
  dispatch(goToPage(routes.faq, history));
};
