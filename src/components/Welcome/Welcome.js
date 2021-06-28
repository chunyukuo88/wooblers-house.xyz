import React from 'react';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import AboutModal from '../AboutModal/AboutModal';
import staticStrings from '../../StaticStrings';

export function Welcome() {
  const language = useSelector((state) => state.language);
    return (
      <Popup modal trigger={welcomeString(language)}>
        {close => <AboutModal close={close} />}
      </Popup>
    );
}

const welcomeString = (language) => (
  <div data-testid='welcome-string'>
    {staticStrings.welcome[language]}
  </div>
);
