import React, { Component } from 'react';
import Header from '../containers/header';
import Intro from '../containers/intro';
import Stopwatch from '../containers/stopwatch';
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-detail';

class Movies extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<h1>Movies Trivia</h1>
    		<Intro />
    		<MovieList />
    		<Stopwatch />
    		<MovieDetail />
    	</div>
    );
  }
}

export default Movies;