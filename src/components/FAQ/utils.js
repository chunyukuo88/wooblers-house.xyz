import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';
import { reactGaStrings } from '../../common/reactGaStrings';

const { categoryStr, actionStr} = reactGaStrings.navigation.toMainPageFromFaqPage;

export const backButtonHandler = (dispatch, history) => {
  fireGoogleAnalyticsEvent(categoryStr, actionStr);
  dispatch(goToPage(routes.index, history));
};
