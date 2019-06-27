// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import { applyMiddleware } from 'react-redux';
import logger from 'redux-logger';
import allReducers from './reducers';

const middleware = applyMiddleware(logger());

const store = createStore(allReducers, middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//const store = createStore(allReducers, middleware);

// CSS
import './css/style.scss';

// Routes
import routes from './router';

// Render
ReactDOM.render(
  <Provider store={store}>
  	{routes}
  </Provider>,
  document.getElementById('root')
);