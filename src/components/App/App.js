import React, { useEffect, lazy, Suspense } from "react";
import Heading from "../Heading/Heading";
import PhotoDisplay from "../Carousel/AllPhotos";
import Copyright from "../Copyright/Copyright";
import { useDispatch } from "react-redux";
import { Faq } from "../FAQ/Faq.jsx";
import {
  getGlobalHumidity,
  getGlobalTemp,
} from "../../actionCreators/weatherActionCreators";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../../css/common.css";
import "../../css/App.css";
import ReactGa from "react-ga";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_UA_FOR_REACTGA);
    dispatchTempAndHumidity(dispatch);
  }, [dispatch]);

  return (
    <div id="app">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/faq" component={Faq} />
        </Switch>
      </Router>
    </div>
  );
}

const MainPage = () => (
  <>
    <div id="heading-wrapper">
      <Heading />
    </div>
    <div id="photodisplay-wrapper">
      <PhotoDisplay />
    </div>
    <div id="copyright-wrapper">
      <Copyright />
    </div>
  </>
);

const dispatchTempAndHumidity = (dispatcher) => {
  dispatcher(getGlobalTemp());
  dispatcher(getGlobalHumidity());
};

export default App;
