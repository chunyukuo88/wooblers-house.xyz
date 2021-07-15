import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import ReactGa from 'react-ga';

export const faqButtonHandler = (dispatch, history) => {
  ReactGa.event({
    category: 'Click - Navigation',
    action: 'User navigated to FAQ page.'
  });
  dispatch(goToPage(routes.faq, history));
};
