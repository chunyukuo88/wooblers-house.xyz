import React, { useState } from 'react';

export const ExpandablePanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    question,
    answer,
    icon,
  } = props;

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
      <div data-testid='children' className={`expandable-panel__content ${visible(isOpen)}`}>
        {answer}
      </div>
    </section>
  );
};

const visible = (isOpen) => (isOpen ? '' : 'hidden');
