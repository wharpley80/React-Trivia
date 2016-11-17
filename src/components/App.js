import React, { Component } from 'react';
import Header from '../containers/header';
import Welcome from '../containers/welcome';
import WelcomeImages from '../containers/welcome-images';
import WelcomeContent from '../containers/welcome-content';
import MovieResponse from '../containers/movie-response';
import MovieGuessed from '../containers/movie-guessed';
import { connect } from 'react-redux';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="container">
          <Welcome />
          <WelcomeImages />
          <WelcomeContent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;