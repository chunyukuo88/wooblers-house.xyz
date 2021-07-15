import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { copyrightStringHandler } from './utils';
import staticStrings from '../../StaticStrings';
import '../../css/Copyright.css';
import { useHistory } from 'react-router-dom';

export default function Copyright(){
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector((state) => state.language);
  const copyrightString = staticStrings.copyright[language];
  const currentYear = new Date().getFullYear();
  const 年 = language === 'chinese' && '年'; //Chinese grammar requires this after a numerically expressed year.
  return (
    <div id='copyright'
         className={`${language} copyright`}
         onClick={()=>copyrightStringHandler(dispatch, history)}>
      <span data-testid='copyright-string'>{copyrightString}</span>
      <span data-testid='current-year'>{currentYear}</span>
      <span data-testid='chinese-char-for-year'>{年}</span>
    </div>
  );
};
