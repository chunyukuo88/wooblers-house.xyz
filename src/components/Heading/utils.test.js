import { faqButtonHandler } from './utils';
import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import ReactGa from 'react-ga';

jest.mock('../../actionCreators/navActionCreators');

describe('utils.js', ()=>{
  describe('faqButtonHandler()', ()=>{
    const dispatch = jest.fn();
    const history = [];
    beforeEach(() => {
      jest.clearAllMocks();
    });
    describe('WHEN: given a dispatch function and a history array', ()=>{
      it('THEN: The function dispatches an the goToPage action creator with the correct route and the history array.', ()=>{
        goToPage.mockImplementation(jest.fn());

        faqButtonHandler(dispatch, history);

        expect(goToPage).toHaveBeenCalledWith(routes.faq, history);
      });
      it('THEN: It dispatches the event to GA via ReactGA.', ()=>{
        const spy = jest.spyOn(ReactGa, 'event');
        const expectedParams = {
          category: 'Click - Navigation',
          action: 'User navigated to FAQ page.'
        };
        faqButtonHandler(dispatch, history);

        expect(spy).toHaveBeenCalledWith(expectedParams);
      });
    });
  });
});

