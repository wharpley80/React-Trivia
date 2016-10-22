import React, { Component } from 'react';
import Header from '../containers/header';
import Intro from '../containers/intro';
import MovieResponse from '../containers/movie-response';
import TriviaCategory from '../containers/trivia-category';


class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="container">
          <Intro />
          <MovieResponse />
          <TriviaCategory />
        </div>
      </div>
    );
  }
}

export default App;