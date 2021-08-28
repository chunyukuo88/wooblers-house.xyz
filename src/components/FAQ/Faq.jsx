import React from 'react';
import staticStrings from '../../StaticStrings.js';
import { useDispatch, useSelector } from 'react-redux';
import { backButtonHandler } from './utils';
import '../../css/Faq.css';
import { useHistory } from 'react-router-dom';
import { ReactComponent as MySignature } from './alex_signature.svg';
import faqContent from './faqContent.json';
import { ExpandablePanel } from './ExpandablePanel.jsx';

export const Faq = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector((state) => state.language);

  const { question, answer } = faqContent.secure[0];
  const icon = 'CLICK ME';

  return (
    <div  data-testid='faq-page-container'
          className={`${language} faq-page-container`}>
      <div data-testid='faq-content-container'>
        <ExpandablePanel {...{question, answer, icon}}/>
      </div>
      <p data-testid='back-button'
         id='back-button'
         onClick={()=>backButtonHandler(dispatch, history)}
      >{ staticStrings.faqRouteToMain[language] }</p>
      <p><MySignature/></p>
    </div>
  );
};
