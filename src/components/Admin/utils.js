import { Storage } from 'aws-amplify';
import { amplifyConfig } from '../../config';
import { goToPage } from '../../actionCreators/navActionCreators';
import { routes } from '../../routes';

const { MAX_ATTACHMENT_SIZE } = amplifyConfig;
export const backButtonHandler = (dispatch, history) => {
  dispatch(goToPage(routes.index, history));
};

export const messages = {
  fileIsTooBig: `Please pick a file smaller than ${MAX_ATTACHMENT_SIZE/1_000_000} MB.`,
  noFileGiven: 'No file has been selected.',
  uploadSuccessful: 'File has been uploaded to S3. \nKey: ',
};

const getUploadSuccessfulMsg = (key) => messages.uploadSuccessful + key;

export const fileUploadHandler = async (selectedFile) => {
  if (!selectedFile) {
    alert(messages.noFileGiven);
    return;
  }
  await submissionHandler(selectedFile);
};

const submissionHandler = async (file) => {
  if (fileIsTooBig(file)) {
    alert(messages.fileIsTooBig);
    return;
  };
  await uploadPhotoToS3(file);
};

const uploadPhotoToS3 = async (file) => {
  const result = await Storage.put(file.name, file, {
    contentType: 'image/JPG',
    customPrefix: {
      public: ''
    },
  });
  alert(getUploadSuccessfulMsg(result.key));
};

const fileIsTooBig = (file) => file && file.size > MAX_ATTACHMENT_SIZE;
