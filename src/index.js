// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import routes from './router';
import thunk from 'redux-thunk';
import allReducers from './reducers';

// CSS
import './css/style.scss';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

// Render
ReactDOM.render(
	<Provider store={store}>
  		{routes}
  	</Provider>,
  	document.getElementById('root')
);