import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { amplifyConfig } from '../../config';
import { uploadPhotoToS3 } from './utils/uploadToS3';
// import {
//   ListGroup,
//   FormGroup,
//   FormControl,
// } from 'react-bootstrap';

/**
Xiao3wu1zhi1wu1
 * */
export const ProtectedContent = () => {
  const [ selectedFile, setSelectedFile ] = React.useState(null);
  return (
    <>
      <AmplifySignOut/>
      <h1 className='english'>You are logged in</h1>
      <input type='file' onChange={fileSelectionHandler}/>
      <button onClick={fileUploadHandler}>Upload image</button>
    </>
  );
}

const fileSelectionHandler = (setSelectedFile, event) => {
  event.preventDefault();
  setSelectedFile(event.target.files[0]);
};

const fileUploadHandler = (selectedFile) => {
  const fd = new FormData();
  fd.append('image', selectedFile, selectedFile.name);
  handleSubmit(fd);
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
