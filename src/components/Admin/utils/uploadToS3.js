import { Storage } from 'aws-amplify';

export const uploadPhotoToS3 = async (file) => {
  if (!file) {
    alert(noFileGiven);
    return;
  };
  const result = await Storage.put(file.name, file, {
    contentType: file.type,
  });
  alert(result);
};

export const noFileGiven = 'No file has been selected.';


