import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import {
  ListGroup,
  FormGroup,
  FormControl,
} from 'react-bootstrap';

export const ProtectedContent = () => {
  return (
    <>
      <AmplifySignOut/>
      <h1 className='english'>You are logged in</h1>
      <div className='english coming-soon'>Admin page coming soon!</div>
    </>
  );
};

