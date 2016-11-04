import React, { Component } from 'react';
import { connect } from 'react-redux';
import TriviaCategory from '../containers/trivia-category';
import SportsTrivia from '../containers/sports-list';





class Stopwatch extends Component {



	render() {

		var Timelimit = React.createClass({
		  getInitialState: function() {
		    return {
		      running: false,
		      elapsedTime: 20000,
		      previousTime: 0,
		      showResults: false,
		    } 
		  },

		  componentDidMount: function() {
		    this.interval = setInterval(this.onTick, 100);
		  },

		  componentWillUnmount: function() {
		    clearInterval(this.interval);
		  },

		  onTick: function() {
				if (this.state.running) {
		      var now = Date.now();
		      this.setState({  	
		        previousTime: now,
		        elapsedTime: this.state.elapsedTime - (now - this.state.previousTime),
		      });
		    } 
		  },

		  onStart: function() {
		    this.setState({   
		      running: true,
		      previousTime: Date.now(),
		      showResults: true,
		    });
		    console.log("Hello");
				setTimeout(this.onStop, 20000); 
		  },
 
 			onSports: function() {
 				console.log("hello");
 					return (
 						<div>
 							<h1>Hello</h1>
 						</div>
 					);
 			},
		  

		  onStop: function() {
		    this.setState({ 
		      running: false,
		      showResults: false,
		    });
		  },

		  onReset: function() {
		    this.setState({
		      elapsedTime: 20000,
		      previousTime: Date.now(),
		    });
		  },

		  render: function() {
		    var seconds = Math.floor(this.state.elapsedTime / 1000);
		    return (
		      <div className="stopwatch">
		        <h2>Stopwatch</h2>
		        <div className="stopwatch-time">{ seconds }</div>
		        { this.state.running ?
		          <button onClick={this.onStop}>Stop</button> 
		          :
		          <button onClick={this.onStart}>Start</button>
		          }
		        <button onClick={this.onReset}>Reset</button>
		        { this.state.showResults ? <SportsTrivia /> : null }
		        
		      </div>


		    );
		  }
		});

		return (
			<Timelimit />
		);

	}

}

export default Stopwatch;

