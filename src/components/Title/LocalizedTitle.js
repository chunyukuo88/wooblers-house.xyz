import React from 'react';
import Hedgehog from '../Hedgehog/Hedgehog.jsx';

export const LocalizedTitle = (props) => {
  const { language, localizedString } = props;

  const hedgehogProps = { language: language };

  return (
    <div className='title-container'>
      <div data-testid='title-string' className={`${language} title-string`}>
        {localizedString}
      </div>
      <RussianHedgehog {...hedgehogProps}/>
    </div>
  );
};

const RussianHedgehog = ({ language }) => (language === 'russian')
  && <div data-testid='hedgehog'>
      <Hedgehog/>
    </div>;
