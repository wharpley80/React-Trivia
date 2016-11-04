import React, { Component } from 'react';
import Header from '../containers/header';
import Stopwatch from '../containers/stopwatch';
import SportsTrivia from '../containers/sports-list';
import SportsGuessed from '../containers/sports-guessed';
import SportsScore from '../containers/sports-score';

class Sports extends Component {
  render() {
    return (
    	<div>
    		<Header />
        <div className="container">
  		    <h1>Sports Trivia</h1>
          <Stopwatch />
  		    <SportsGuessed />
  		   <SportsScore />
  	    </div>
      </div>
    );
  }
}

export default Sports;