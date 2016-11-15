import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieTrivia from '../containers/movie-list';
import GameRules from '../containers/game-rules';
import MovieExpire from '../containers/movie-expire';
import { restartMovie } from '../actions/restart-movie';

import { bindActionCreators } from 'redux';

class MovieStopwatch extends Component {

	render() {
		
		var Timelimit = React.createClass({
			
		  getInitialState: function() {
		    return {
		      running: false,
		      elapsedTime: 60000,
		      previousTime: 0,
		      showResults: false,
		      gameRules: true,
		      showExpire: false,
		      startButton: true,
		      showTimer: false,
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
		      gameRules: false,
		      startButton: false,
		      showTimer: true,
		      showExpire: false,
		    });
		    console.log("Hello");
				setTimeout(this.onStop, 60000); 
		  },
		  
		  onStop: function() {
		    this.setState({ 
		      running: false,
		      showResults: false,
		      elapsedTime: 60000,
		      showExpire: true,
		      showTimer: false,
		      startButton: true,
		    });
		  },

		  onReset: function() {
		    this.setState({
		      elapsedTime: 60000,
		      previousTime: Date.now(),
		    });
		  },

		  render: function() {
		    var seconds = Math.floor(this.state.elapsedTime / 1000);
		    return (
		      <div className="stopwatch">
		        { this.state.gameRules ? <GameRules /> : null }	
		        { this.state.startButton ? <button className="btn" onClick={ this.onStart }>Start</button> : null }
		        { this.state.showTimer ? <div className="stopwatch-time">{ seconds }</div> : null }
		        { this.state.showResults ? <MovieTrivia /> : null }		
		        { this.state.showExpire ? <MovieExpire  onStart={ this.props.onStart }/> : null }     
		      </div>
		    );
		  }
		});

		return (
			<Timelimit />
		);

	}

}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ restartMovie: restartMovie }, dispatch)
}

function mapStateToProps(state) {
	return {
		sports: state.sports
	};
}

export default MovieStopwatch;
