import React from 'react';
import Hedgehog from '../Hedgehog/Hedgehog.jsx';

export const LocalizedTitle = (props) => {
  const { language, localizedString } = props;
  const className = _createClassName(language);

  const hedgehogProps = { language: language };

    return (
      <div className='title-container'>
        <div data-testid='title-string'
             className={className}>
          {localizedString}
        </div>
        <div>
          <RussianHedgehog {...hedgehogProps}/>
        </div>
      </div>
    );
};

const RussianHedgehog = ({ language }) => (language === 'russian') ? <Hedgehog/> : null;

const _createClassName = (language) => `${language}-title`;

