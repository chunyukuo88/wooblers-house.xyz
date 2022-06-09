import React from 'react';
import { useDispatch } from 'react-redux';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import { Welcome } from '../Welcome/Welcome';
import { useHistory } from 'react-router-dom';
import { faqButtonHandler } from './utils';
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
        {t('titleStrings.1')}
      </div>
      <nav id='heading__nav-items'>
        <div id='nav-items__welcome' className='welcome'>
          {t('welcome.1')}
        </div>
        <div className='weather' id='nav-items__weather'>
          {t('weatherLabels.1')}
        </div>
        <div className={'faq'}
             id='nav-items__faq'
             data-testid='faq'
             onClick={()=>faqButtonHandler(dispatch, history)}>
          {t('faqButton.1')}
        </div>
        <div id='nav-items__language'
             className='localization'
             data-testid='language'
             onClick={handleClick}>
          {t('languageLabel.1')}
        </div>
      </nav>
    </section>
  );
};
