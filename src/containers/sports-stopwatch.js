import React, { Component } from 'react';
import { connect } from 'react-redux';
import TriviaCategory from '../containers/trivia-category';
import SportsTrivia from '../containers/sports-list';
import GameRules from '../containers/game-rules';
import SportsExpire from '../containers/sports-expire';
import { restartSports } from '../actions/restart-sports';
import { bindActionCreators } from 'redux';

class SportsStopwatch extends Component {

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
		    	<div>
			    	{ this.state.showTimer ? <div className="stopwatch-time">{ seconds }</div> : null }
			      <div className="stopwatch">
			        { this.state.gameRules ? <GameRules /> : null }	 
			        { this.state.startButton ? <button className="start-btn" onClick={ this.onStart }>Start</button> : null }
			        { this.state.showResults ? <SportsTrivia /> : null }		
			        { this.state.showExpire ? <SportsExpire  onStart={ this.props.onStart }/> : null }    
			      </div>
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
	return bindActionCreators({restartSports: restartSports}, dispatch)
}

function mapStateToProps(state) {
	return {
		sports: state.sports
	};
}

export default SportsStopwatch;
