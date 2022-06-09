import React from 'react';
import { LocalizedTitle } from './LocalizedTitle';
import staticStrings from '../../StaticStrings';
import '../../css/Title.css';

const Title = () => (
  <div  id='title-display-container' data-testid='title'>
    <TitleBasedOnLanguage id='title'/>
  </div>
);

const _buildPropsForLocalizedTitle = (language) => {
  return {
    language: language,
    localizedString: staticStrings.titleStrings[language]
  };
};

const TitleBasedOnLanguage = ({ language }) => {
  const props = _buildPropsForLocalizedTitle(language);
  return <LocalizedTitle {...props}/>;
};

export default Title;
