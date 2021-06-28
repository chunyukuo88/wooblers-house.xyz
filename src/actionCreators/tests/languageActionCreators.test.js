import * as actions from '../languageActionCreators';

global.fetch = jest.fn(() =>
  setTimeout( ()=>{
    Promise.resolve({
      json: ()=> Promise.resolve({ data: { main: { temp: 50 }}}),
    })
  }, 100)
);

describe('languageActionCreators.js: ', ()=>{
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
});

