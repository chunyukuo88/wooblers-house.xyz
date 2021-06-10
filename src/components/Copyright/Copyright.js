import React from 'react';
import { useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';

const Copyright = () => {
  const language = useSelector((state) => state.language);
  const copyrightString = staticStrings.copyright[language];
  const currentYear = new Date().getFullYear();
  return (
    <div id='copyright' className={language}>
      <span>{copyrightString}</span><span data-testid='current-year'>{currentYear}</span>
    </div>
  );
};

export default Copyright;
