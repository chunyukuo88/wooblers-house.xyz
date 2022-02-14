import AWS from "aws-sdk";

AWS.config.region = "us-east-1";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
});

export const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
});
const albumBucketName = "woobler-photos";
export const bucketParams = {
  Bucket: albumBucketName,
};
