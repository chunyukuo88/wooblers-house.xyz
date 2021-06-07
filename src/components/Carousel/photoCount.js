import AWS from 'aws-sdk';

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:1f7f72b9-a2e9-4c6e-a304-08eae3599fb5',
});

/**
 * Keep this as a reference.
 * */

const s3 = new AWS.S3({apiVersion: '2006-03-01'});
const albumBucketName = 'woobler-photos';
const bucketParams = {Bucket: albumBucketName};

async function getFotoCount() {
  const result = await s3.listObjectsV2(bucketParams).promise()
    .then(data => data.Contents.length);
  console.log('getFotoCount()');
  return result;
}
