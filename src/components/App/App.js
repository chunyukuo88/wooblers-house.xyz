import React, { useEffect } from 'react';
import Heading from '../Heading/Heading';
import FotoDisplay from '../Carousel/FotoDisplay';
import Copyright from '../Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { getGlobalHumidity, getGlobalTemp } from '../../actions/actions';
import ReactGa from 'react-ga';
import idleTimer from '../../timer';
import '../../css/common.css';
import '../../css/App.css';

export default function App() {
  idleTimer();
  useEffect(() => {
    ReactGa.initialize(`${process.env.REACT_APP_GA}`);
    ReactGa.pageview(window.location.pathname + window.location.search);
    dispatchTempAndHumidity(dispatch);
  });
  const dispatch = useDispatch();
    return (
      <div id='app' data-test="component-app">
        <Heading/>
        <FotoDisplay />
        <Copyright/>
      </div>
    );
}

const dispatchTempAndHumidity = (dispatcher) => {
  dispatcher(getGlobalTemp());
  dispatcher(getGlobalHumidity());
}
