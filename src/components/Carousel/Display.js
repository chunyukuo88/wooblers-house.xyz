import React from 'react';
import staticStrings from '../../StaticStrings';
import { useSelector } from 'react-redux';

export const Display = ({ photosObject }) => {
  if (!photosObject) return <ErrorMessage />;
  return photosObject?.Contents?.map((obj, key) => {
    const numberedSrc = `${process.env.REACT_APP_FOTO_SOURCE}/${key + 1} (Custom).JPG`;
    return (
      <div className='photo' data-testid='photo' key={key} >
        <img src={numberedSrc} alt='test'/>
      </div>
    );
  });
}

const ErrorMessage = () => {
  const language = useSelector((state) => state.language);
  return (
    <div className={language} data-testid='error-message'>
      {staticStrings.errorLoadingPhotos[language]}
    </div>
  );
};
