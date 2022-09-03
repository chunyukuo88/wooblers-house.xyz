import React, { useState, useEffect } from "react";
import { getPhotos } from "./utils";
import { s3, bucketParams } from "./awsParams";
import { Display } from "./Display";

async function runGetPhotos(setPhotos) {
  let photos;
  await getPhotos(s3, bucketParams)
    .then((data) => (photos = data));
  setPhotos(photos);
}

export default function AllPhotos() {
  const [photosObject, setPhotos] = useState();

  useEffect(() => {
    runGetPhotos(setPhotos);
  }, []);

  return <Display {...{ photosObject }} />;
}
