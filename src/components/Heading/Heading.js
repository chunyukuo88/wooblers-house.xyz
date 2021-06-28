import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchToRussian, switchToEnglish, switchToChinese } from '../../actionCreators/languageActionCreators';
import staticStrings from '../../StaticStrings';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import { Welcome } from '../Welcome/Welcome';
import * as GA from '../../googleAnalytics/events';
import '../../css/Heading.css';
import { routes } from '../../routes';
import { useHistory } from 'react-router-dom';
import {goToPage} from "../../actionCreators/navActionCreators";

export default function Heading(){
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector((state) => state.language);

  return (
    <section id='heading' data-test='heading'>
      <div id='heading__title'>
        <Title/>
      </div>
      <nav id='heading__nav-items'>
        <div id='nav-items__welcome'
             onClick={GA.welcomeTextGA}>
          <Welcome/>
        </div>
        <div id='nav-items__weather'
             data-test='weather-display'>
          <WeatherDisplay/>
        </div>
                                                <div className={`${language} faqs`}
                                                     id='nav-items__faq'
                                                     onClick={()=>faqButtonHandler(dispatch, history)}>
                                                  <FAQDisplay language={language}/>
                                                </div>
        <div id='nav-items__language'
           className={`${language} nav-item`}
           data-testid='language'
           onClick={() => locButtonHandler(language, dispatch)} >
          <LanguageDisplay language={language}/>
        </div>
      </nav>
    </section>
  );
};

const FAQDisplay = ({ language }) => staticStrings.faqButton[language];

const LanguageDisplay = ({ language }) => staticStrings.languageLabel[language];

const locButtonHandler = (language, dispatch) => {
  if (language === 'russian') dispatch(switchToEnglish());
  if (language === 'english') dispatch(switchToChinese());
  if (language === 'chinese') dispatch(switchToRussian());
}

const faqButtonHandler = (dispatch, history) => {
  dispatch(goToPage(routes.faq, history));
  console.log('faqButtonHandler()');
}
