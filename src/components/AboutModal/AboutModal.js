import React from 'react';
import { useSelector } from 'react-redux';
import '../../css/AboutModal.css';
import StaticString from '../StaticString/StaticString';
import Code from '../Code/Code';
import buildStringProps from './utils';

const AboutModal = () => {
  const language = useSelector((state) => state.language);
    return (
      <div className='modal'>
        <div className='modal-header'>
          <StaticString {...buildStringProps(language, 'modalHeading')}/>
        </div>
        <div className='content'>
          <StaticString {...buildStringProps(language, 'modalSummary')}/>
          <StaticString {...buildStringProps(language, 'modalDescription')}/>
          <StaticString {...buildStringProps(language, 'modalCoverage')}/>
          <Code/>
        </div>
      </div>
    );
};


export default AboutModal;
