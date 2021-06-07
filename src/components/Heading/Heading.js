import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchToRussian, switchToEnglish, switchToChinese } from '../../actions/actions';
import staticStrings from '../../StaticStrings';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Title from '../Title/Title';
import Welcome from '../Welcome/Welcome';
import * as GA from '../../googleAnalytics/events';
import '../../css/Heading.css';

function Heading(){
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language);

    const locButtonHandler = () => {
        if (language === 'russian') dispatch(switchToEnglish());
        if (language === 'english') dispatch(switchToChinese());
        if (language === 'chinese') dispatch(switchToRussian());
    };

    return (
        <section id="heading" data-test='heading'>
              <div id="heading__title">
                    <Title/>
              </div>
              <nav id='heading__nav-items'>
                    <div id='nav-items__welcome' onClick={GA.welcomeTextGA}>
                        <Welcome/>
                    </div>
                    <div id='nav-items__weather' data-test='weather-display'>
                        <WeatherDisplay/>
                    </div>
                    <div id='nav-items__language' className={language + ' nav-item'} onClick={locButtonHandler} >
                        {staticStrings.languageLabel[language]}
                    </div>
              </nav>
        </section>
    );
};







export default Heading;
