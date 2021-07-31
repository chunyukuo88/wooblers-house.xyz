import React from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '../../css/Admin.css';
import { amplifyConfig } from '../../config';
import { ProtectedContent } from './ProtectedContent.jsx';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: amplifyConfig.cognito.REGION,
    userPoolId: amplifyConfig.cognito.USER_POOL_ID,
    identityPoolId: amplifyConfig.cognito.IDENTIY_POOL_ID,
    userPoolWebClientId: amplifyConfig.cognito.APP_CLIENT_ID,
  },
  Storage: {
    AWSS3: {
      region: amplifyConfig.s3.REGION,
      bucket: amplifyConfig.s3.BUCKET,
      identityPoolId: amplifyConfig.cognito.IDENTIY_POOL_ID,
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
