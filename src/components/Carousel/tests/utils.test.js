import { getPhotos } from '../utils';
import AWS  from 'aws-sdk-mock';

describe('utils.js', ()=>{
  describe('getPhotos()', ()=>{
    describe('WHEN: Invoked,', ()=>{
      it('THEN: The function returns photos from the S3 bucket.', async ()=>{
        const mockResponseObject = new Promise(resolve => {
          resolve({}, {}, {});
        });

        AWS.mock('S3', 'listObjectsV2', function(params, callback) {
          callback(null, mockResponseObject);
        });

        const result = getPhotos();

        expect(result).toStrictEqual(mockResponseObject);
      });
    });
  });
});
