export const getPhotos = (s3, bucketParams) => {
  return s3.listObjectsV2(bucketParams).promise();
};
