import React, { useState, useEffect } from 'react';
import { getPhotos } from './utils';
import { Display } from './Display';

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


//
// const _fetchCaptions = async (captionsSetter) => {
//   const result = await fetch(urls.captions).then(res => res.text());
//   const arr = result.split('\n');
//   captionsSetter(arr);
// };
