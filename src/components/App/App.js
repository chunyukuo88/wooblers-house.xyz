import React, { useEffect } from 'react';
import Heading from '../Heading/Heading';
import FotoDisplay from '../Carousel/AllPhotos';
import Copyright from '../Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { getGlobalHumidity, getGlobalTemp } from '../../actions/actions';
import ReactGa from 'react-ga';
import '../../css/common.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ReactGa.initialize(`${process.env.REACT_APP_GA}`);
    ReactGa.pageview(window.location.pathname + window.location.search);
    dispatchTempAndHumidity(dispatch);
  }, []);

  return (
    <div id='app' data-test='component-app'>
      <Heading />
      <FotoDisplay />
      <Copyright />
    </div>
  );
};

const dispatchTempAndHumidity = (dispatcher) => {
  dispatcher(getGlobalTemp());
  dispatcher(getGlobalHumidity());
};
