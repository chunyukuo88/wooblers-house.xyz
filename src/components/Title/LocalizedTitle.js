import React from 'react';
import Hedgehog from '../Hedgehog/Hedgehog.jsx';

export const LocalizedTitle = (props) => {
  const { language, localizedString } = props;
  const className = _getClassName(language);
  const dataTestValue = _getDataTestValue(language);

  const hedgehogProps = { language: language };

    return (
      <div className='title-container'>
        <div data-test={dataTestValue} className={className}>
          {localizedString}
        </div>
        <div>
          <RussianHedgehog {...hedgehogProps}/>
        </div>
      </div>
    );
};

const RussianHedgehog = ({ language }) => (language === 'russian') ? <Hedgehog/> : null;

const _getClassName = (language) => `${language}-title`;

const _getDataTestValue = (language) => `${language}-title`;

export const titleStrings = {
  english: 'Woobler\'s House',
  chinese: '小巫之屋',
  russian: 'Берлога Пуха',
};