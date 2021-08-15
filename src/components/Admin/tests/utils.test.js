import * as utils from '../utils';
import awsAmplify from 'aws-amplify';

jest.mock('aws-amplify');

describe('utils.js', ()=>{
  describe('fileUploadHandler()', ()=>{
    describe('GIVEN: No file is given', ()=>{
      describe('WHEN: this function is invoked, ', ()=>{
        it('THEN: an alert indicating that no file has been given is triggered.', async ()=>{
          const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});

          await utils.fileUploadHandler();

          expect(spy).toHaveBeenCalledTimes(1);
        });
      });
    });
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
  describe('GIVEN: A file object is not given,', ()=>{
    it('AND: it triggers an alert saying that a file was not passed in.', async ()=>{
      const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      awsAmplify.Storage.put.mockImplementation(jest.fn());

      await utils.fileUploadHandler();

      expect(spy).toHaveBeenCalledWith(utils.noFileGiven);
    });
  });
  });
});
