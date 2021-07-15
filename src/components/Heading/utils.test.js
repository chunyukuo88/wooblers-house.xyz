import { faqButtonHandler, locButtonHandler } from './utils';
import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';

jest.mock('../../actionCreators/navActionCreators');
jest.mock('../../common/reactGa');

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
      it('THEN: It dispatches the event to GA via fireGoogleAnalyticsEvent().', ()=>{
        fireGoogleAnalyticsEvent.mockImplementation(jest.fn());
        const categoryStr = 'Click - Navigation';
        const actionStr = 'User navigated to FAQ page.';

        faqButtonHandler(dispatch, history);

        expect(fireGoogleAnalyticsEvent).toHaveBeenCalledWith(categoryStr, actionStr);
      });
    });
  });
  describe('locButtonHandler()', ()=>{
    describe('WHEN: The function is invoked,', ()=>{
      it('THEN: The action is sent to GA via ReactGa.', ()=>{
        const language = 'some language';
        const dispatch = jest.fn();
        const categoryStr = 'Click - Localization';
        const actionStr = 'User switched language.';
        locButtonHandler(language, dispatch);

        expect(fireGoogleAnalyticsEvent).toHaveBeenCalledWith(categoryStr, actionStr);
      });
    });
  });
});

