import React from 'react';
import { useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';

export default function Copyright(){
  const language = useSelector((state) => state.language);
  const copyrightString = staticStrings.copyright[language];
  const currentYear = new Date().getFullYear();
  const 年 = language === 'chinese' && '年';
  return (
    <div id='copyright' className={language}>
      <span>{copyrightString}</span>
      <span data-testid='current-year'>{currentYear}</span>
      <span data-testid='chinese-char-for-year'>{年}</span>
    </div>
  );
};
