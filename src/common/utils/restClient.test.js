import { fetchJsonData } from '../restClient';

describe('restClient.js', ()=>{
  describe('fetchJsonData()', ()=>{
    it('When given an endpoint, it fetches the JSON data.', async ()=>{
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
});
