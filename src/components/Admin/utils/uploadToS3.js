import { Storage } from 'aws-amplify';

export const uploadPhotoToS3 = async (file) => {
  const stored = await Storage.put(file.name, file, {
    contentType: file.type,
  });
  return stored.key;
};


