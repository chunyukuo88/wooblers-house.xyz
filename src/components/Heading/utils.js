import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';

export const faqButtonHandler = (dispatch, history) => {
  dispatch(goToPage(routes.faq, history));
  console.log('faqButtonHandler()');
};
