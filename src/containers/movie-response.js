import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { guessMovie } from '../actions/guess-movie';

class MovieResponse extends Component {

	render() {


		  let guesser  = [
			  {
			    name: "William Harpley",
			    score: 31,
			    id: 1,
			  },
			  {
			    name: "Matt Mazur",
			    score: 11,
			    id: 2,
			  },
			];
		
let myID = 1;
		var MovieTrivia = React.createClass({



			getInitialState: function() {
  			return {
  				answer: 'Green',
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

			myGuess: function() {
		    return {
		      guess: 'Billy', 
		    };
		      
		  },
	  
	  	render: function() {
	  		if (this.state.answer == 'hello') {
					console.log("Hello");
				}
	  		return (
	  			<div>
						<h1>{this.state.answer}</h1>
						<input type="text" value={this.state.answer} onChange={this.movieAnswer} />
						<input type="submit" value="submit" onClick={() => guessMovie(guesser)} />
					</div>
	  		);
			}

	  });

		return (
			<MovieTrivia />
		);

  }

}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({guessMovie: guessMovie}, dispatch)
}

export default connect(matchDispatchToProps)(MovieResponse);