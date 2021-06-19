import AWS from 'aws-sdk';

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01'
});
const albumBucketName = 'woobler-photos';
const bucketParams = {
  Bucket: albumBucketName
};

export async function getFotoCount() {
  const result = await s3.listObjectsV2(bucketParams)
    .promise()
    .then(data => data.Contents.length);
  console.log('getFotoCount(): ', result);
  return result;
}
