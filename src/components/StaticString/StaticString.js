import React from 'react';
import staticStrings from '../../StaticStrings.js';

const StaticString = ({ language, stringLabel }) => (
  <p className={language}>
    {staticStrings[stringLabel][language]}
  </p>
);

export default StaticString;
