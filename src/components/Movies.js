import React, { Component } from 'react';
import Header from '../containers/header';
import Intro from '../containers/intro';
import Stopwatch from '../containers/stopwatch';

class Movies extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<h1>Movies Trivia</h1>
    		<Intro />
    		<Stopwatch />
    	</div>
    );
  }
}

export default Movies;