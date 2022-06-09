import React from 'react';
import { useDispatch } from 'react-redux';
import staticStrings from '../../StaticStrings';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import { Welcome } from '../Welcome/Welcome';
import { useHistory } from 'react-router-dom';
import { faqButtonHandler, locButtonHandler } from './utils';
import { useTranslation } from "react-i18next";
import '../../css/Heading.css';

export default function Heading(){
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <section id='heading'>
      <div id='heading__title'>
        <Title/>
      </div>
      <nav id='heading__nav-items'>
        <div id='nav-items__welcome' className={`${language} welcome`}>
          <Welcome/>
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
