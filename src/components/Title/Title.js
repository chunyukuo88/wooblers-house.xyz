import React from 'react';
import { useSelector } from 'react-redux';
import { titleStrings, LocalizedTitle } from './LocalizedTitle';
import { mouseOverTitle } from '../../googleAnalytics/events';
import _ from 'lodash';
import '../../css/Title.css';

const Title = () => {
  const selectedLang = useSelector((state) => state.language);
  const props = { language: selectedLang };
  document.title = titleStrings[selectedLang];

  return (
    <div  id='title-display-container' onMouseEnter={mouseOverTitle} data-test='title-container'>
      <TitleBasedOnLanguage id='title' {...props} />
    </div>
  );
};

const _buildProps = (language) => {
  const clonedStrings = _.cloneDeep(titleStrings);
  return {
    language: language,
    localizedString: clonedStrings[language]
  };
};

const TitleBasedOnLanguage = ({ language }) => {
  const props = _buildProps(language);
  return <LocalizedTitle {...props}/>;
};

export default Title;