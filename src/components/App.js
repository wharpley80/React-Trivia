import React, { Component } from 'react';
import Header from '../containers/header';
import Intro from '../containers/intro';
import MovieResponse from '../containers/movie-response';
import TriviaCategory from '../containers/trivia-category';
import MovieGuessed from '../containers/movie-guessed';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="container">
          <Intro />
          <MovieResponse dispatch={this.props.dispatch} />
          <MovieGuessed guessed={this.props.guessed} />
          <TriviaCategory />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App);