import React from "react";
// import Amplify from 'aws-amplify';
// import awsconfig from '../../aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import "../../css/Admin.css";
import { ProtectedContent } from "./ProtectedContent.jsx";

// Amplify.configure(awsconfig);

function Admin() {
  return <ProtectedContent />;
}

export default Admin;
//TODO: Figure out how to test this with/out the wrapper, which adds a shadow dom
// export default withAuthenticator(Admin);
