import { getPhotos } from '../utils';
import AWS  from 'aws-sdk-mock';

describe('utils.js', ()=>{
  describe('getPhotos()', ()=>{
    describe('WHEN: Invoked,', ()=>{
      it('THEN: The function returns photos from the S3 bucket.', ()=>{
        const mockResponseObject = [{}, {}, {}];
        AWS.mock('S3', 'listObjectsV2', mockResponseObject);

        const result = getPhotos();

        expect(result).toEqual(mockResponseObject);
      });
    });
  });
});
