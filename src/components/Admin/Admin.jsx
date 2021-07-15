import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

function Admin (){
  return (
    <>
      <div>Hello</div>
      <AmplifySignOut/>
    </>
  );
};

export default withAuthenticator(Admin);
