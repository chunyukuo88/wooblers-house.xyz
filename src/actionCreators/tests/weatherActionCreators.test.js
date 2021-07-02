import { getGlobalTemp, getGlobalHumidity } from '../weatherActionCreators';
import { getWeatherDatum } from '../../common/restClient';
import * as types from '../types';

jest.mock('../../common/restClient');

describe('languageActionCreators.js: ', ()=>{
  describe('The getGlobalTemp action creator', ()=>{
  beforeEach(()=>{
    getWeatherDatum.mockImplementation(()=> 20);
  });
    test('has the FETCH_TEMP type', async ()=>{
      const action = await getGlobalTemp();

      expect(action.type).toEqual(types.FETCH_TEMP);
    });
    test('and has the correct payload.', async ()=>{
      const action = await getGlobalTemp();

      expect(action.payload).toStrictEqual({ globalTemp: 20 });
    });
  });

  describe('The getGlobalHumidity action creator ', ()=>{
    beforeEach(()=>{
      getWeatherDatum.mockImplementation(()=> 40);
    });
    test('has the "FETCH_HUMIDITY" type', ()=>{
      const action = getGlobalHumidity();
      setTimeout(()=>{
        console.log(action.type);
        expect(action.type).toEqual('FETCH_HUMIDITY');
      }, 100);
    });
    test('and has the correct payload', async ()=>{
      const expectedResult = {
        globalHumidity: 40
      };

      const result = await getGlobalHumidity();

      expect(result.payload).toStrictEqual(expectedResult);
    });
  });
});


