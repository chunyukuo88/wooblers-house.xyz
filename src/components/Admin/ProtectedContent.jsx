import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { fileUploadHandler } from './utils';

export const ProtectedContent = () => {
  const [ selectedFile, setSelectedFile ] = React.useState(null);

  const fileSelectionHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <>
      <AmplifySignOut/>
      <section data-testid='logged-in-section' className='logged-in-section english'>
        <h1 >You are logged in</h1>
        <input type='file' onChange={(e) => fileSelectionHandler(e)}/>
        <button onClick={() => fileUploadHandler(selectedFile)}>
          Upload image
        </button>
      </section>
    </>
  );
};
