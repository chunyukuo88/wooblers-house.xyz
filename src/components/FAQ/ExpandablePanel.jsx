import React, { useState } from 'react';
import TemplateComponent from 'react-mustache-template-component';
import { templateVariables } from './templateVariables';
import '../../css/ExpandablePanel.css';

export const ExpandablePanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer, icon } = props;

  const newAnswer = `<div>${answer}</div>`
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <section className='expandable-panel'>
      <div className='expandable-panel__question' onClick={toggleIsOpen} tabIndex='0'>
        <div className='expandable-panel__question-text'>
          {question}
        </div>
        <i className='expandable-panel__question-icon'
           data-testid='icon'
           aria-hidden='true'>
          {icon}
        </i>
      </div>
      <div data-testid='answer' className={`expandable-panel__answer ${visible(isOpen)}`}>
        <TemplateComponent template={newAnswer} data={templateVariables} />
      </div>
    </section>
  );
};

const visible = (isOpen) => (isOpen ? '' : 'hidden');
