// Lib
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

//Components
import App from './components/App';
import Sports from './components/Sports';
import Movies from './components/Movies';
import Places from './components/Places';
import NotFound from './components/NotFound';

//Routes
const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
			<Route path="movies" component={Movies} />
			<Route path="sports" component={Sports} />
			<Route path="places" component={Places} />
			<Route path="*" component={NotFound} />

	</Router>
);

export default routes;