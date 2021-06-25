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
