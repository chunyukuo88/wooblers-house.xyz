import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';
import { reactGaStrings } from '../../common/reactGaStrings';

const { category, action } = reactGaStrings.navigation.toMainPageFromFaqPage;

export const backButtonHandler = (dispatch, history) => {
  fireGoogleAnalyticsEvent(category, action);
  dispatch(goToPage(routes.index, history));
};
