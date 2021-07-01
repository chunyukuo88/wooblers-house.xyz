import React from 'react';
import { useSelector } from 'react-redux';
import { LocalizedTitle } from './LocalizedTitle';
import staticStrings from '../../StaticStrings';
import { mouseOverTitle } from '../../googleAnalytics/events';
import '../../css/Title.css';

const Title = () => {
  const selectedLang = useSelector((state) => state.language);
  const props = { language: selectedLang };
  document.title = staticStrings.titleStrings[selectedLang];

  return (
    <div  id='title-display-container'
          onMouseEnter={mouseOverTitle}
          data-testid='title'>
      <TitleBasedOnLanguage id='title' {...props} />
    </div>
  );
};

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
