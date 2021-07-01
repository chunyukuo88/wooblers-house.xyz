import { getPhotos } from '../utils';
import AWS from 'aws-sdk';

jest.mock('aws-sdk');

describe('utils.js', ()=>{
  describe('getFotoCount()', ()=>{
    describe('WHEN: Invoked,', ()=>{
      it('THEN: The function returns photos from the S3 bucket.', ()=>{
        // const albumBucketName = 'woobler-photos';
        // const bucketParams = {
        //   Bucket: albumBucketName
        // };
        // const mockArrayOfPhotos = [{},{},{}];
        // const mockS3 = {
        //   listObjectsV2: (bucketParams) => mockArrayOfPhotos,
        // };
        // AWS.mockImplementation(()=>{});
      });
    });
  });
});
