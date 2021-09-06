import * as utils from '../utils';
import awsAmplify from 'aws-amplify';
import { amplifyConfig } from '../../../config';
import { goToPage } from '../../../actionCreators/navActionCreators';
import { routes } from '../../../routes';

jest.mock('aws-amplify');
jest.mock('../../../actionCreators/navActionCreators');

const { messages } = utils;

describe('utils.js', ()=>{
  beforeEach(()=>{
    jest.clearAllMocks();
  });
  describe('fileUploadHandler()', ()=>{
    describe('GIVEN: A valid file object,', ()=>{
      describe('WHEN: This function is invoked,', ()=>{
        const file = {};
        file.name = 'test.jpg';

        it('THEN: The file is uploaded to S3,', async ()=>{
          awsAmplify.Storage.put.mockImplementation(() => ({key: 'fubar'}));
          const expectedConfig = {};
          expectedConfig.contentType = 'image/JPG';
          expectedConfig.customPrefix = {
            public: '',
          };

          await utils.fileUploadHandler(file);

          expect(awsAmplify.Storage.put).toHaveBeenCalledWith(file.name, file, expectedConfig);
        });
        it('AND: it then triggers an alert signifying that the upload was successful.', async ()=>{
          awsAmplify.Storage.put.mockImplementation(() => ({key: 'fubar'}));
          const spy = jest.spyOn(window, 'alert').mockImplementation(jest.fn());
          const file = {};
          file.name = 'test.jpg';

          await utils.fileUploadHandler(file);

          expect(spy).toHaveBeenCalledWith(expect.any(String));
        });
      });
    });
    describe('WHEN: no file is passed in,', ()=>{
      it('THEN: it triggers an alert saying that a file was not passed in.', async ()=>{
        const spy = jest.spyOn(window, 'alert').mockImplementation(jest.fn());
          awsAmplify.Storage.put.mockImplementation(jest.fn());

          await utils.fileUploadHandler();

          expect(spy).toHaveBeenCalledWith(messages.noFileGiven);
        });
      });
    describe('WHEN: the file passed in is too big', ()=>{
      it('THEN: The function alerts the user and returns nothing.', async ()=>{
        const spy = jest.spyOn(window, 'alert').mockImplementation(jest.fn());
        const errorMsg = `Please pick a file smaller than ${amplifyConfig.MAX_ATTACHMENT_SIZE/1_000_000} MB.`;
        const file = {};
        file.size = 5_000_001;
        file.type = 'image/jpeg';

        const result = await utils.fileUploadHandler(file);

        expect(spy).toHaveBeenCalledWith(errorMsg);
        expect(result).toBeUndefined();
      });
    });
  });
  describe('backButtonHandler()', ()=>{
    describe('WHEN: given a dispatch function and a history array,', ()=>{
      it('THEN: The function dispatches an the goToPage action creator with the correct route and the history array.', ()=>{
        const dispatch = jest.fn();
        const history = [];
        goToPage.mockImplementation(jest.fn());

        utils.backButtonHandler(dispatch, history);

        expect(goToPage).toHaveBeenCalledWith(routes.index, history);
      });
    });
  });
});
