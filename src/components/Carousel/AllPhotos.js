import React, { useState, useEffect } from 'react';
import { getPhotos } from './utils';
import { Display } from './Display';

async function runGetPhotos(setPhotos) {
  const photos = await getPhotos();
  setPhotos(photos);
}

export default function AllPhotos(){
  const [ photosObject, setPhotos ] = useState();

  useEffect(()=>{
    runGetPhotos(setPhotos);
  }, []);

  return <Display {...{ photosObject }}/>;
};
