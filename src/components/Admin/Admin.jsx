import React from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '../../css/Admin.css';
import { ProtectedContent } from './ProtectedContent.jsx';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:4fd65d6b-3898-4129-9712-de687ad9aa8b',
    region: 'us-east-1',
    userPoolId: 'us-east-1_uEeZqOq9b',
    userPoolWebClientId: '5fagst079p2vrhu18j0vpieedl',
  },
  Storage: {
    AWSS3: {
      bucket: 'woobler-photos',
      region: 'us-east-1',
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
