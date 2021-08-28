import React, { useState } from 'react';

export const ExpandablePanel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    title,
    children,
    icon,
  } = props;

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <section className='expandable-panel'>
      <div className='expandable-panel__title' onClick={toggleIsOpen} tabIndex='0'>
        <div className='expandable-panel__title-text'>
          {title}
        </div>
        <i className='expandable-panel__title-icon'
           data-testid='icon'
           aria-hidden='true'>
          {icon}
        </i>
      </div>
      <div data-testid='children' className={`expandable-panel__content ${visible(isOpen)}`}>
        {children}
      </div>
    </section>
  );
};

const visible = (isOpen) => (isOpen ? '' : 'hidden');
