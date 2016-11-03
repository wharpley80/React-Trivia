import React, { Component } from 'react';
import Header from '../containers/header';
import Intro from '../containers/intro';
import SportsTrivia from '../containers/sports-list';
import SportsGuessed from '../containers/sports-guessed';
import SportsScore from '../containers/sports-score';

class Sports extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<h1>Sports Trivia</h1>
    		<Intro />
    		<SportsTrivia />
    		<SportsGuessed />
    		<SportsScore />
    	</div>
    );
  }
}

export default Sports;