import React, { Component } from 'react';
import Header from '../containers/header';
import Intro from '../containers/intro';

class Sports extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<h1>Sports Trivia</h1>
    		<Intro />
    	</div>
    );
  }
}

export default Sports;