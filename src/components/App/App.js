import React, { useEffect } from 'react';
import Heading from '../Heading/Heading';
import PhotoDisplay from '../Carousel/AllPhotos';
import Copyright from '../Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { Faq } from '../FAQ/Faq.jsx';
import { getGlobalHumidity, getGlobalTemp } from '../../actionCreators/weatherActionCreators';
import Admin from '../Admin/Admin.jsx';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../../css/common.css';
import '../../css/App.css';
import ReactGa from 'react-ga';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_UA_FOR_REACTGA);
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
            <Admin/>
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

export default App;
