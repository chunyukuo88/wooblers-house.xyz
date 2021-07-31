import { Storage } from 'aws-amplify';

export const uploadPhotoToS3 = async (file) => {
  const filename = `${file.name} (Custom)-min.JPG`;
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });
  return stored.key;
};
