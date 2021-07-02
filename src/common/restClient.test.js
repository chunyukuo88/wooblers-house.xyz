import { fetchJsonData, getWeatherDatum } from './restClient';
import urls from '../urls';

describe('restClient.js / fetchJsonData()', ()=>{
  describe('WHEN: given an endpoint, ', ()=>{
    it('THEN: fetches the JSON data.', async ()=>{
      const endpoint = 'some.fake.endpoint';
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
        headers: { get: () => [] },
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

      await fetchJsonData(endpoint);

      expect(global.fetch).toHaveBeenCalledWith(endpoint);
    });
  });
  describe('WHEN: an error occurs, ', ()=>{
    it('THEN: the error is logged to the console.', async ()=>{
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
        headers: { get: () => [] },
      });
      const mockError = new Error('==== ERROR ====');
      jest.spyOn(global.console, 'log').mockImplementation(console.log(mockError));

      expect(console.log).toBeCalledWith(mockError);
    });
  });
});

describe('restClient.js / getWeatherDatum()', ()=>{
  describe('WHEN: Given a weather attribute of \'temp\',', ()=>{
    it('THEN: It returns that weather attribute.', async ()=>{
      const weatherAttribute = 'temp';
      const mockSuccessResponse = {
        main: {
          temp: 280,
          humidity: 50,
        },
      };
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
        headers: { get: () => [] },
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

      const temp = await getWeatherDatum(weatherAttribute);

      expect(temp).toEqual(mockSuccessResponse.main[weatherAttribute]); // degrees Kelvin
    });
  });
  describe('WHEN: Given a weather attribute of \'humidity\',', ()=>{
    it('THEN: It returns that weather attribute.', async ()=>{
      const weatherAttribute = 'humidity';
      const mockSuccessResponse = {
        main: {
          temp: 280,
          humidity: 50,
        },
      };
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
        headers: { get: () => [] },
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

      const temp = await getWeatherDatum(weatherAttribute);

      expect(temp).toEqual(mockSuccessResponse.main[weatherAttribute]);
    });
  });
  describe('WHEN: Given an invalid weather attribute,', ()=>{
    it('THEN: It triggers an error.', async ()=>{
      const weatherAttribute = 'garbage';

      const temp = await getWeatherDatum(weatherAttribute);

      expect(temp).toBeUndefined();
    });
  });
});
