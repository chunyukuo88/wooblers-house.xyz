import React from 'react';
import staticStrings from '../../StaticStrings.js';
import { useDispatch, useSelector } from 'react-redux';
import { backButtonHandler } from './utils';
import '../../css/Faq.css';
import { useHistory } from 'react-router-dom';
import { ReactComponent as MySignature } from './alex_signature.svg';
import { allQaPairs } from './faqContent.js';
import { ExpandablePanel } from './ExpandablePanel.jsx';

export const Faq = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector((state) => state.language);

  return (
    <section  data-testid='faq-page-container' className={`${language} faq-page-container`}>
      <h1>FAQ</h1>
      <div data-testid='faq-content-container'>
        <Content />
      </div>
      <p data-testid='back-button'
         id='back-button'
         role='button'
         onClick={()=>backButtonHandler(dispatch, history)}
      >
        {staticStrings.faqRouteToMain[language]}
      </p>
      <h2>Thanks for stopping by!</h2>
      <MySignature/>
    </section>
  );
};

const Content = () => {
  const [openDropdownNumber, setOpenDropdownNumber] = React.useState(null);

  return allQaPairs.map((qaPair, key) => {
    const { question, answer } = qaPair;
    return (
      <div data-testid='qa-pair' key={key}>
        <ExpandablePanel
          question={question}
          answer={answer}
          idNumber={key}
          openDropdownNumber={openDropdownNumber}
          setOpenFn={setOpenDropdownNumber}
        />
      </div>
    );
  });
};
