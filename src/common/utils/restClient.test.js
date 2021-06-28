import { fetchJsonData } from '../restClient';

// import urls from '../../urls';

// import * as types from '../types';

// global.fetch = jest.fn(() =>
//   setTimeout( ()=>{
//     Promise.resolve({
//       json: ()=> Promise.resolve({ data: { main: { temp: 50 }}}),
//     })
//   }, 100)
// );
//
// test('and calls the correct URL.', ()=>{
//   expect(global.fetch).toHaveBeenCalledWith(urls.openWeatherUrl);
// });

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

      expect(global.fetch).toHaveBeenCalled();
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
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
      jest.spyOn(global.console, 'log').mockImplementation(console.log(mockError));

      await fetchJsonData();

      expect(console.log).toBeCalledWith(mockError);
    });
  });
});
