import React from 'react';
import TemplateComponent from 'react-mustache-template-component';
import { templateVariables } from './templateVariables';
import '../../css/ExpandablePanel.css';

export const ExpandablePanel = (props) => {
  const {
    answer,
    idNumber,
    openDropdownNumber,
    question,
    setOpenFn,
  } = props;

  const isOpen = openDropdownNumber === idNumber;
  const newAnswer = `<div>${answer}</div>`;
  const toggleIsOpen = () => setOpenFn(idNumber);

  const Question = () => (
    <div className='expandable-panel__question-text'>
      {question}
    </div>
  );
  const Icon = () => <i className='expandable-panel__question-icon' data-testid='icon'>哈</i>;
  const Answer = () => (
    <div
      data-testid='answer'
      className={`expandable-panel__answer ${visible(isOpen)}`}
      aria-hidden={!isOpen}
    >
      <TemplateComponent template={newAnswer} data={templateVariables} />
    </div>
  );

  return (
    <section className='expandable-panel'>
      <div
        className='expandable-panel__question'
        onClick={toggleIsOpen}
        role='button'
        tabIndex='0'
      >
        <Question />
        <Icon />
      </div>
      <Answer />
    </section>
  );
};

const visible = (isOpen) => (isOpen ? '' : 'hidden');
