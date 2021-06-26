import React, { useEffect } from 'react';
import Heading from '../Heading/Heading';
import PhotoDisplay from '../Carousel/AllPhotos';
import Copyright from '../Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { getGlobalHumidity, getGlobalTemp } from '../../actions/actions';
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
} from 'react-router-dom';
import ReactGa from 'react-ga';
import '../../css/common.css';

const FAQs = () => <FAQs />;

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ReactGa.initialize(`${process.env.REACT_APP_GA}`);
    ReactGa.pageview(window.location.pathname + window.location.search);
    dispatchTempAndHumidity(dispatch);
  }, [dispatch]);

  return (
    <div id='app' data-test='component-app'>
      <Heading />
      <Router>
        <Switch>
          <PhotoDisplay exact path='/'/>
        </Switch>
        <Switch>
          <FAQs exact path='/faqs' data-testid='faqs-link'/>
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
};

const dispatchTempAndHumidity = (dispatcher) => {
  dispatcher(getGlobalTemp());
  dispatcher(getGlobalHumidity());
};
