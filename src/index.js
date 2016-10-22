// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
//import App from './components/App';

const store = createStore(allReducers);

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