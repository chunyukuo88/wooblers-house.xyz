import {goToPage} from '../../actionCreators/navActionCreators';
import {routes} from '../../routes';
import {fireGoogleAnalyticsEvent} from '../../common/reactGa';
import { reactGaStrings } from '../../common/reactGaStrings';
import { switchToChinese, switchToEnglish, switchToRussian } from '../../actionCreators/languageActionCreators';

const { navigation, localization } = reactGaStrings;

export const faqButtonHandler = (dispatch, history) => {
  const { categoryStr, actionStr } = navigation.toFaqPageFromMainPage;
  fireGoogleAnalyticsEvent(categoryStr, actionStr);
  dispatch(goToPage(routes.faq, history));
};

export const locButtonHandler = (language, dispatch) => {
  const { categoryStr, actionStr } = localization;
  fireGoogleAnalyticsEvent(categoryStr, actionStr);
  if (language === 'russian') dispatch(switchToEnglish());
  if (language === 'english') dispatch(switchToChinese());
  if (language === 'chinese') dispatch(switchToRussian());
}
