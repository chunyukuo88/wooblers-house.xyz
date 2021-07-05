import React from 'react';
import staticStrings from '../../StaticStrings.js';
import {useDispatch, useSelector} from 'react-redux';
import { backButtonHandler } from './utils';
import '../../css/Faq.css';
import { useHistory } from 'react-router-dom';

export const Faq = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector((state) => state.language);

  return (
    <div  data-testid='faq-page-container'
          className={`${language} faq-page-container`}>
      <p>{ staticStrings.faqComingSoon[language] }</p>
      <p data-testid='back-button'
         id='back-button'
         onClick={()=>backButtonHandler(dispatch, history)}
      >{ staticStrings.faqRouteToMain[language] }</p>
    </div>
  );
};
