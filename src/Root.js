import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import reducer from '../src/reducers'

/**
 * This helper function is used by index.js and various test modules.
 * Without this, I would have to update tests any time I add/change
 * middleware or do anything else that changes the Provider.
 * */

const theInitialState = {
  language: 'english',
  globalTemp: 45,
  globalHumidity: 50
};

export default function Root ({ children, initialState = theInitialState }) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
