import { faqButtonHandler, locButtonHandler } from './utils';
import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';
import { fireGoogleAnalyticsEvent } from '../../common/reactGa';
import { switchToChinese, switchToEnglish, switchToRussian } from '../../actionCreators/languageActionCreators';

jest.mock('../../actionCreators/navActionCreators');
jest.mock('../../common/reactGa');
jest.mock('../../actionCreators/languageActionCreators');

describe('utils.js', ()=>{
  beforeEach(() => {
    jest.clearAllMocks();
  });
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
      describe('AND: The language is set to "russian", ', ()=>{
        it('THEN: The action to switch to English is dispatched.', ()=>{
          const language = 'russian';
          const dispatch = jest.fn();
          switchToEnglish.mockImplementation(jest.fn());

          locButtonHandler(language, dispatch);

          expect(dispatch).toHaveBeenCalledWith(switchToEnglish());
        });
      });
      describe('AND: The language is set to "english", ', ()=>{
        it('THEN: The action to switch to Chinese is dispatched.', ()=>{
          const language = 'english';
          const dispatch = jest.fn();
          switchToChinese.mockImplementation(jest.fn());

          locButtonHandler(language, dispatch);

          expect(dispatch).toHaveBeenCalledWith(switchToChinese());
        });
      });
      describe('AND: The language is set to "chinese", ', ()=>{
        it('THEN: The action to switch to Russian is dispatched.', ()=>{
          const language = 'chinese';
          const dispatch = jest.fn();
          switchToRussian.mockImplementation(jest.fn());

          locButtonHandler(language, dispatch);

          expect(dispatch).toHaveBeenCalledWith(switchToRussian());
        });
      });
      describe('AND: The language is invalid, ', ()=>{
        it('THEN: The action to switch to English is dispatched.', ()=>{
          const language = undefined;
          const dispatch = jest.fn();
          switchToEnglish.mockImplementation(jest.fn());

          locButtonHandler(language, dispatch);

          expect(dispatch).toHaveBeenCalledWith(switchToEnglish());
        });
      });
    });
  });
});

