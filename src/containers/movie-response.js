import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieResponse extends Component {

	render() {

		var MovieTrivia = React.createClass({

			getInitialState: function() {
  			return {
  				answer: '',
  			}
  		},

  		movieAnswer: function(e) {
				this.setState({answer: e.target.value});		
			},

			sayHello: function(e) {
				if (this.state.answer == 'hello') {
					console.log("Hello");
				}
			},
	  
	  	render: function() {
	  		if (this.state.answer == 'hello') {
					console.log("Hello");
				}
	  		return (
	  			<div>
						<h1>{this.state.answer}</h1>
						<input type="text" value={this.state.answer} onChange={this.movieAnswer} />
					</div>
	  		);
			}

	  });

		return (
			<MovieTrivia />
		);

  }

}

export default MovieResponse;