import React from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '../../css/Admin.css';
import config from '../../config';
import { ProtectedContent } from './ProtectedContent.jsx';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTIY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  Storage: {
    AWSS3: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTIY_POOL_ID,
    }
  }
});

export function Admin() {
  return <div data-testid='protectedContent'>
    <ProtectedContent/>
  </div>;
}

// export default Admin;
//TODO: Figure out how to test this with/out the wrapper, which adds a shadow dom
export default withAuthenticator(Admin);
