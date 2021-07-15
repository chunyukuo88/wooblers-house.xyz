import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';
import { reactGaStrings } from '../../common/reactGaStrings';

const { categoryStr, actionStr} = reactGaStrings.navigation.toFaqPageFromMainPage;

export const faqButtonHandler = (dispatch, history) => {
  fireGoogleAnalyticsEvent(categoryStr, actionStr);
  dispatch(goToPage(routes.faq, history));
};
