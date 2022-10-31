import React from 'react';
import { useSelector } from 'react-redux';
import StaticString from '../StaticString/StaticString';
import Code from '../Code/Code';
import buildStringProps from './utils';

const AboutModal = ({ setModalIsVisible }) => {
  const language = useSelector((state) => state.language);
  const headerProps = buildStringProps(language, 'modalHeading');
  const contentProps = {
    language,
    stringArray: ['modalSummary', 'modalCoverage'],
  };
  function handleKeyboardEvent(event) {
    if (event.key === 'a') {
      console.log('w00t');
      setModalIsVisible(false);
    }
  }

  return (
    <>
      <div className='modal' onKeyPress={handleKeyboardEvent}>
        <div className='modal-header'>
          <StaticString {...headerProps}/>
        </div>

        <div className='content'>
          <Content {...contentProps}/>
          <Code/>
        </div>
      </div>
      <div
        className='translucent-overlay'
        onClick={() => setModalIsVisible(false)}
      ></div>
    </>
  );
};

const Content = ({ language, stringArray }) => {
  return stringArray.map(string => {
    return <StaticString {...buildStringProps(language, string)}/>
  });
};

export default AboutModal;
