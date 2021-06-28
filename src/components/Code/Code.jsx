import React from 'react';
import { useSelector } from 'react-redux';
import staticStrings from '../../StaticStrings';
import urls from '../../urls';
import '../../css/Code.css';

const Code = () => {
  const selectedLang = useSelector((state) => state.language);
  return <CodeString {...{ language: selectedLang }} />;
};

const CodeString = ({ language }) => (
  <a href={urls.githubRepo}
     target='_blank'
     className='code-string'
     rel='noopener noreferrer'
     id='repo'>
    <div className={language}
         data-testid='code'
    >
      {staticStrings.code[language]}
    </div>
  </a>
);

export default Code;
