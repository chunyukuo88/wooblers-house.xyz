import { Storage } from 'aws-amplify';
import { amplifyConfig } from '../../config';

export const noFileGiven = 'No file has been selected.';

export const uploadSuccessful = 'File has been uploaded to S3.';

export const fileUploadHandler = async (selectedFile) => {
  if (!selectedFile) {
    alert(noFileGiven);
    return;
  }
  await submissionHandler(selectedFile);
};

const submissionHandler = async (file) => {
  if (fileIsTooBig(file)) {
    fileIsTooBigAlert();
    return;
  }
  await uploadPhotoToS3(file);
};

const uploadPhotoToS3 = async (file) => {
  const result = await Storage.put(file.name, file, {
    contentType: 'image/JPG',
    customPrefix: {
      public: ''
    }
  });
  console.log(result);
};

const fileIsTooBigAlert = () => alert(
  `Please pick a file smaller than ${amplifyConfig.MAX_ATTACHMENT_SIZE/1_000_000} MB.`
);

const fileIsTooBig = (file) => file && file.size > amplifyConfig.MAX_ATTACHMENT_SIZE;
