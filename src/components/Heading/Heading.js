import React from 'react';
import { useDispatch } from 'react-redux';
import staticStrings from '../../StaticStrings';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import { Welcome } from '../Welcome/Welcome';
import { useHistory } from 'react-router-dom';
import { faqButtonHandler, locButtonHandler } from './utils';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import '../../css/Heading.css';

export default function Heading(){
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  function handleClick() {
    i18next.changeLanguage('ch')
  }

  return (
    <section id='heading'>
      <div id='heading__title'>
        <Title/>
      </div>
      <nav id='heading__nav-items'>
        <div id='nav-items__welcome' className={'welcome'}>
          <Welcome/>
        </div>
        <div className={'weather'} id='nav-items__weather'>
          <WeatherDisplay/>
        </div>
        <div className={'faq'}
             id='nav-items__faq'
             data-testid='faq'
             onClick={()=>faqButtonHandler(dispatch, history)}>
          <FAQDisplay/>
        </div>
        <div id='nav-items__language'
             className={'localization'}
             data-testid='language'
             onClick={handleClick}>
          <LanguageDisplay/>
        </div>
      </nav>
    </section>
  );
};

const FAQDisplay = () => 'staticStrings.faqButton[language]';

const LanguageDisplay = () => 'staticStrings.languageLabel[language]';
