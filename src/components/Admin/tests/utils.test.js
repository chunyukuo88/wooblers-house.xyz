import * as utils from '../utils';
import awsAmplify, { Storage } from 'aws-amplify';
import { amplifyConfig } from '../../../config';

jest.mock('aws-amplify');

describe('utils.js', ()=>{
  describe('fileUploadHandler()', ()=>{
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

          await utils.fileUploadHandler(file);

          expect(awsAmplify.Storage.put).toHaveBeenCalledWith(file.name, file, expectedConfig);
        });
        it('AND: it then triggers an alert signifying that the upload was successful.', async ()=>{
          const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
          awsAmplify.Storage.put.mockImplementation(jest.fn());
          const file = {
            name: 'test.jpg',
          };

          await utils.fileUploadHandler(file);

          expect(spy).toHaveBeenCalledWith(utils.uploadSuccessful);
        });
      });
    });
    describe('WHEN: no file is passed in,', ()=>{
      it('THEN: it triggers an alert saying that a file was not passed in.', async ()=>{
          const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
          awsAmplify.Storage.put.mockImplementation(jest.fn());

          await utils.fileUploadHandler();

          expect(spy).toHaveBeenCalledWith(utils.noFileGiven);
        });
      });
    describe('WHEN: the file passed in is too big', ()=>{
      it('THEN: The function alerts the user and returns nothing.', async ()=>{
        const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const errorMsg = `Please pick a file smaller than ${amplifyConfig.MAX_ATTACHMENT_SIZE/1_000_000} MB.`;
        const file = {};
        file.size = 5_000_001;
        file.type = 'image/jpeg';

        const result = await utils.fileUploadHandler(file);

        expect(spy).toHaveBeenCalledWith(errorMsg);
        expect(result).toBeUndefined();
      });
    });
    // describe('WHEN: the upload fails for some other reason', ()=>{
    //   it('THEN: The error is presented in an alert()', async ()=>{
    //     const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    //     const file = {};
    //     file.size = 1234;
    //
    //     await utils.fileUploadHandler(file);
    //
    //     expect(spy).toHaveBeenCalledWith('');
    //   });
    // });
  });
});
