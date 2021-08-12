import { uploadPhotoToS3 } from './utils/uploadToS3';
import { Storage } from 'aws-amplify';

jest.mock('aws-amplify', () => {
  return {
    Storage: {
      put: jest.fn(() => ({
        key: 'some key'
      })),
    },
  };
});

describe('./uploadToS3', ()=>{
  describe('uploadPhotoToS3()', ()=>{
    describe('GIVEN: A valid file object,', ()=>{
      describe('WHEN: This function is invoked,', ()=>{
        it('THEN: The file is uploaded to S3,', async ()=>{
          const spy = jest.spyOn(Storage, 'put');
          const file = {
            name: 'test.jpg',
          };
          const filename = `${file.name} (Custom)-min.JPG`;
          const expectedConfig = {
            contentType: file.type,
          };

          await uploadPhotoToS3(file);

          expect(spy).toHaveBeenCalledWith(filename, file, expectedConfig);
        });
        it('AND: this function returns a response that includes a key.', async ()=>{
          const file = {
            name: 'test.jpg',
          };
          const expectedResult = '';

          const result = await uploadPhotoToS3(file);

          expect(result).toEqual(expectedResult);
        });
      });
    });
  });
});
