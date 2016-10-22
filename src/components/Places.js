import React, { Component } from 'react';
import Header from '../containers/header';
import Intro from '../containers/intro';

class Places extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<h1>Places Trivia</h1>
    		<Intro />
    	</div>
    );
  }
}

export default Places;