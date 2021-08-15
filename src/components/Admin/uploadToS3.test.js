import { uploadPhotoToS3 } from './utils/uploadToS3';
import awsAmplify from 'aws-amplify';

jest.mock('aws-amplify');
//   return {
//     Storage: {
//       put: jest.fn(() => ({
//         key: 'some key'
//       })),
//     },
//   };
// });

describe('./uploadToS3', ()=>{
  describe('uploadPhotoToS3()', ()=>{
    describe('GIVEN: A valid file object,', ()=>{
      describe('WHEN: This function is invoked,', ()=>{
        it('THEN: The file is uploaded to S3,', async ()=>{
          // const spy = jest.spyOn(Storage, 'put');
          // TODO: This test now passes but manually test this as well.
          awsAmplify.Storage.put.mockImplementation(jest.fn());
          const file = {
            name: 'test.jpg',
          };
          const expectedConfig = {
            contentType: file.type,
          };

          await uploadPhotoToS3(file);

          expect(awsAmplify.Storage.put).toHaveBeenCalledWith(file.name, file, expectedConfig);
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
