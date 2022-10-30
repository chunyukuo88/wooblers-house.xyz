import React, {useEffect, useState} from 'react';
import Heading from '../Heading/Heading';
import PhotoDisplay from '../Carousel/AllPhotos';
import Copyright from '../Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { Faq } from '../FAQ/Faq.jsx';
import { getGlobalHumidity, getGlobalTemp } from '../../actionCreators/weatherActionCreators';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../css/common.css';
import '../../css/App.css';
import '../../css/AboutModal.css';
import ReactGa from 'react-ga';
import AboutModal from "../AboutModal/AboutModal";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_UA_FOR_REACTGA);
    dispatchTempAndHumidity(dispatch);
  }, []);
  return (
    <div id='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/faq' component={Faq} />
        </Switch>
      </Router>
    </div>
  );
}

const MainPage = () => {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  return (
    <>
      <div id='heading-wrapper'>
        <Heading toggleModalFn={setModalIsVisible}/>
      </div>
      <div id='welcome-modal-wrapper'>
        {modalIsVisible && <AboutModal/>}
      </div>
      <div id='photodisplay-wrapper'>
        <PhotoDisplay />
      </div>
      <div id='copyright-wrapper'>
        <Copyright />
      </div>
    </>
  );
}

const dispatchTempAndHumidity = (dispatchFn) => {
  dispatchFn(getGlobalTemp());
  dispatchFn(getGlobalHumidity());
};
