import React from 'react';
import { useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';

const Copyright = () => {
  const language = useSelector((state) => state.language);
  return (
    <div id='copyright' className={language}>
      {staticStrings.copyright[language]}
    </div>
  );
};

export default Copyright;
