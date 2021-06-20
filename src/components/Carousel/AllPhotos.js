import React, { useState, useEffect } from 'react';
import { getPhotos } from './utils';
import staticStrings from '../../StaticStrings';
import { useSelector } from 'react-redux';

export default function AllPhotos(){
  const [ photosObject, setPhotos ] = useState();

  useEffect(()=>{
    async function runGetPhotos() {
      const photos = await getPhotos();
      setPhotos(photos);
    }
    runGetPhotos();
  }, []);

  return <Display {...{ photosObject }}/>;
};

const Display = ({ photosObject }) => {
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
//
// const _fetchCaptions = async (captionsSetter) => {
//   const result = await fetch(urls.captions).then(res => res.text());
//   const arr = result.split('\n');
//   captionsSetter(arr);
// };
