import React from 'react';
import staticStrings from '../../StaticStrings.js';
import { useSelector } from 'react-redux';
import '../../css/Faq.css';

export const Faq = () => {
  const language = useSelector((state) => state.language);
  return (
    <div  data-testid='faq-page-container'
          className={`${language} faq-page-container`}>
      { staticStrings.faqComingSoon[language] }
    </div>
  );
};
