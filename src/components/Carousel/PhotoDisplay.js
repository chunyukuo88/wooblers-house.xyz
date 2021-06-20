import React, { useState, useEffect } from 'react';
import { getPhotos } from './photoCount';

export default function PhotoDisplay(){
  const [ photosObject, setPhotos ] = useState();

  useEffect(async ()=>{
    const photos = await getPhotos();
    setPhotos(photos);
  }, []);

  return <Display {...{ photosObject }}/>;
};

const Display = ({ photosObject }) => {
  if (!photosObject) return <ErrorMessage />;
  return photosObject?.Contents.map((obj, key) => {
    const numberedSrc = `${process.env.REACT_APP_FOTO_SOURCE}/${key + 1} (Custom).JPG`;
    return (
      <div className='photo' data-testid='photo' key={key} >
        <img src={numberedSrc} alt='test'/>
      </div>
    );
  });
}

const ErrorMessage = () => (
  <div data-testid='error-message'>
    There was an error loading the photos. Please contact the webmaster.
  </div>
);
//
// const _fetchCaptions = async (captionsSetter) => {
//   const result = await fetch(urls.captions).then(res => res.text());
//   const arr = result.split('\n');
//   captionsSetter(arr);
// };
