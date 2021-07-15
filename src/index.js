import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import ReactGa from "react-ga";

ReactGa.initialize(process.env.REACT_APP_UA_FOR_REACTGA);

ReactDOM.render(
  <Root>
    <App/>
  </Root>,
  document.getElementById('root')
);

serviceWorker.unregister();
