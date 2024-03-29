import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import { useHistory } from 'react-router-dom';
import { faqButtonHandler, locButtonHandler } from './utils';
import '../../css/Heading.css';

export default function Heading({ setModalIsVisible }){
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector((state) => state.language);
  function handleKeyboardEvent(event) {
    if (event.key === 'Escape') {
      setModalIsVisible(false);
    }
  }
  return (
    <section id='heading' tabIndex={0} onKeyDown={handleKeyboardEvent}>
      <div id='heading__title'>
        <Title/>
      </div>
      <nav id='heading__nav-items'>
        <div
          id='nav-items__welcome'
          className={`${language} welcome`}
          onClick={() => setModalIsVisible(true)}
        >
          {staticStrings.welcome[language]}
        </div>
        <div className={`${language} weather`} id='nav-items__weather'>
          <WeatherDisplay/>
        </div>
        <div className={`${language} faq`}
             id='nav-items__faq'
             data-testid='faq'
             onClick={()=>faqButtonHandler(dispatch, history)}>
          <FAQDisplay language={language}/>
        </div>
        <div id='nav-items__language'
             className={`${language} localization`}
             data-testid='language'
             onClick={() => locButtonHandler(language, dispatch)}>
          <LanguageDisplay language={language}/>
        </div>
      </nav>
    </section>
  );
};

const FAQDisplay = ({ language }) => staticStrings.faqButton[language];

const LanguageDisplay = ({ language }) => staticStrings.languageLabel[language];
