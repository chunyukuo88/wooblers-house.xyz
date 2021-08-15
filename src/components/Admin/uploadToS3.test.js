import { uploadPhotoToS3, noFileGiven } from './utils/uploadToS3';
import awsAmplify from 'aws-amplify';

jest.mock('aws-amplify');

describe('./uploadToS3', ()=>{
  describe('uploadPhotoToS3()', ()=>{
    describe('GIVEN: A valid file object,', ()=>{
      describe('WHEN: This function is invoked,', ()=>{
        it('THEN: The file is uploaded to S3,', async ()=>{
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
        it('AND: it then triggers an alert signifying that the upload was successful.', async ()=>{
          const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
          awsAmplify.Storage.put.mockImplementation(jest.fn());
          const file = {
            name: 'test.jpg',
          };

          await uploadPhotoToS3(file);

          expect(spy).toHaveBeenCalledTimes(1);
        });
      });
    });
    describe('GIVEN: A file object is not given,', ()=>{
      it('AND: it then triggers an alert notifying the user that a file was not passed in.', async ()=>{
        const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        awsAmplify.Storage.put.mockImplementation(jest.fn());

        await uploadPhotoToS3();

        expect(spy).toHaveBeenCalledWith(noFileGiven);
      });
    });
  });
});
