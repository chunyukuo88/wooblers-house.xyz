import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';
import { reactGaStrings } from '../../common/reactGaStrings';

const { navigation } = reactGaStrings;

export const faqButtonHandler = (dispatch, history) => {
  const { category, action } = navigation.toFaqPage;
  fireGoogleAnalyticsEvent(category, action);
  dispatch(goToPage(routes.faq, history));
};
