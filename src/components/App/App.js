import React, { useEffect } from 'react';
import Heading from '../Heading/Heading';
import PhotoDisplay from '../Carousel/AllPhotos';
import Copyright from '../Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { Faq } from '../FAQ/Faq.jsx';
import { getGlobalHumidity, getGlobalTemp } from '../../actionCreators/weatherActionCreators';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { AmplifySignout, withAuthenticator } from '@aws-amplify/ui-react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../../css/common.css';
import '../../css/App.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatchTempAndHumidity(dispatch);
  }, [dispatch]);

  return (
    <div id='app' data-test='component-app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <div id='heading-wrapper'><Heading /></div>
            <div id='photodisplay-wrapper'><PhotoDisplay/></div>
            <div id='copyright-wrapper'><Copyright /></div>
          </Route>
          <Route exact path='/faq'>
            <Faq exact path='/faq' data-testid='faqs-link'/>
          </Route>
          <Route exact path='/admin'>
            <AmplifySignOut />
            <h2>Admin Page</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const dispatchTempAndHumidity = (dispatcher) => {
  dispatcher(getGlobalTemp());
  dispatcher(getGlobalHumidity());
};
