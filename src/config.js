export const amplifyConfig = {
  MAX_ATTACHMENT_SIZE: 5_000_000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'woobler-photos',
  },
  // apiGateway: {
  //   REGION: '',
  //   URL: '',
  // },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_uEeZqOq9b',
    APP_CLIENT_ID: '5fagst079p2vrhu18j0vpieedl',
    IDENTIY_POOL_ID: 'us-east-1:4fd65d6b-3898-4129-9712-de687ad9aa8b',
  },
};
