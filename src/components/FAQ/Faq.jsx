import React from 'react';
import staticStrings from '../../StaticStrings.js';
import { useDispatch, useSelector } from 'react-redux';
import { backButtonHandler } from './utils';
import '../../css/Faq.css';
import { useHistory } from 'react-router-dom';
import { ReactComponent as MySignature } from './alex_signature.svg';
import faqContent from './faqContent.json';

export const Faq = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector((state) => state.language);

  return (
    <div  data-testid='faq-page-container'
          className={`${language} faq-page-container`}>
      <FaqContent props={getFaqData()}/>
      <p data-testid='back-button'
         id='back-button'
         onClick={()=>backButtonHandler(dispatch, history)}
      >{ staticStrings.faqRouteToMain[language] }</p>
      <p><MySignature/></p>
    </div>
  );
};

const FaqContent = ({ props }) => props.map((qaPair, index) => (
  <div className='faq__topics' key={index}>
    <ExpandablePanel {...buildQaPanelData(props, index)}>

    </ExpandablePanel>
  </div>
));
