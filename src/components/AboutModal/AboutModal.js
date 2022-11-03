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

  return (
    <>
      <div className='modal'>
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
      />
    </>
  );
};

const Content = ({ language, stringArray }) => {
  return stringArray.map(string => {
    return <StaticString {...buildStringProps(language, string)}/>
  });
};

export default AboutModal;
