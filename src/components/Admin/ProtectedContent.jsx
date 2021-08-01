import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { amplifyConfig } from '../../config';
import { uploadPhotoToS3 } from './utils/uploadToS3';

/**
Xiao3wu1zhi1wu1
 * */
export const ProtectedContent = () => {
  const [ selectedFile, setSelectedFile ] = React.useState(null);

  const fileSelectionHandler = (event) => setSelectedFile(event.target.files[0]);

  const fileUploadHandler = async (selectedFile) => {
    const fd = createFormData(selectedFile);
    await handleSubmit(fd);
  };

  return (
    <>
      <AmplifySignOut/>
      <section className='logged-in-section english'>
        <h1 >You are logged in</h1>
        <input type='file'
               onChange={(e) => fileSelectionHandler(e)}
        />
        <button onClick={() => fileUploadHandler(selectedFile)}>
          Upload image
        </button>
      </section>
    </>
  );
}

const createFormData = (selectedFile) => {
  const fd = new FormData();
  fd.append('image', selectedFile, selectedFile.name);
  return fd;
};

export const handleSubmit = async (file) => {
  if (fileIsTooBig(file)) { fileIsTooBigAlert(); return; }
  try {
    await uploadPhotoToS3(file);
  } catch (e) {
    alert(e);
  }
}

const fileIsTooBigAlert = () => alert(`Please pick a file smaller than ${amplifyConfig.MAX_ATTACHMENT_SIZE/1_000_000} MB.`);

const fileIsTooBig = (file) => file && file.size > amplifyConfig.MAX_ATTACHMENT_SIZE;
