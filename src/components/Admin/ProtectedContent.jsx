import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';

export const ProtectedContent = () => {
  return (
    <>
      <AmplifySignOut/>
      <div>Hello</div>
    </>
  );
};
