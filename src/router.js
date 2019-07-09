// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter
} from 'react-router-dom';

// Components
import App from './components/App';
import Movies from './components/Movies';
import Sports from './components/Sports';
import Places from './components/Places';

const routes = (
	<Router>
		<Route exact path="/" component={App} />
		<Route path="/movies" component={Movies} />
		<Route path="/sports" component={Sports} />
		<Route path="/places" component={Places} />
	</Router>
);

export default routes;
