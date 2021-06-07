import React from 'react';
import staticStrings from '../../StaticStrings.js';

const StaticString = ({language, stringLabel}) => (
    <div className={language}>
        {staticStrings[stringLabel][language]}
    </div>
);

export default StaticString;