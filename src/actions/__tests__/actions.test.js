import * as actions from '../actionCreators';
import urls from '../../urls';
import * as types from "../types";

global.fetch = jest.fn(() =>
  setTimeout( ()=>{
    Promise.resolve({
      json: ()=> Promise.resolve({ data: { main: { temp: 50 }}}),
    })
  }, 100)
);


describe('actionCreators.js: ', ()=>{
  describe('The switchToRussian action creator', ()=>{
    const action = actions.switchToRussian();
    test('has the RUSSIAN type,', ()=>{
      expect(action.type).toEqual('RUSSIAN');
    });
    test('and has the "russian" payload.', ()=>{
      expect(action.payload).toEqual('russian');
    });
  });
  describe('The switchToChinese action creator', ()=>{
    const action = actions.switchToChinese();
    test('has the CHINESE type,', ()=>{
      expect(action.type).toEqual('CHINESE');
    });
    test('and has the "chinese" payload.', ()=>{
      expect(action.payload).toEqual('chinese');
    });
  });
  describe('The switchToEnglish action creator', ()=>{
    const action = actions.switchToEnglish();
    test('has the ENGLISH type,', ()=>{
      expect(action.type).toEqual('ENGLISH');
    });
    test('and has the "english" payload.', ()=>{
      expect(action.payload).toEqual('english');
    });
  });



  describe('The getGlobalTemp action creator', ()=>{
    const action = actions.getGlobalTemp();
    test('has the FETCH_TEMP type', ()=>{
      setTimeout(()=>{
        console.log(action.type);
        expect(action.type).toEqual('FETCH_TEMP');
      }, 100);
    });
    test('and calls the correct URL.', ()=>{
        expect(global.fetch).toHaveBeenCalledWith(urls.openWeatherUrl);
    });
    test('and has the correct payload.', ()=>{
      expect(action.payload).toBe({ temp: 20 });
    });
  });

  describe('The getGlobalHumidity action creator', ()=>{
    const action = actions.getGlobalHumidity();
    test('has the "FETCH_HUMIDITY" type', ()=>{
      setTimeout(()=>{
        console.log(action.type);
        expect(action.type).toEqual('FETCH_HUMIDITY');
      }, 100);
    });
    test('and has the correct payload', async ()=>{
      const result = await action.payload;
      expect(result).toBe({humidity: 40});
    });
  });
  describe('The fetchWeather helper function', ()=>{
    test('handles exception with null', async () => {
      fetch.mockImplementationOnce(() => Promise.reject('Api failure'));
      const result = await actions.fetchWeather('temp');
      expect(result).not.toBeDefined();
    });
  });

  describe('The goToPage action creator', ()=>{
    describe('GIVEN: A page and history array', async () => {
      it('THEN: It returns the GO_TO_PAGE type.', ()=>{
        const history = [];
        const page = '/some-page';

        const result = actions.goToPage(page, history);

        expect(result.type).toEqual(types.GO_TO_PAGE);
      });
      it('AND: It returns a payload with the given page.', ()=>{
        const history = [];
        const page = '/some-page';

        const action = actions.goToPage(page, history);

        const expectedResult = {
          globalNavLocation: '/some-page',
        };

        expect(action.payload).toEqual(expectedResult);
      });
      it('AND: It returns a payload with the given page.', ()=>{
        const history = [];
        const page = '/some-page';

        actions.goToPage(page, history);

        expect(history[0]).toEqual(page);
      });
    });
  });
});

