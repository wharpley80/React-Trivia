import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesTrivia from '../containers/places-list';
import GameRules from '../containers/game-rules';
import PlacesExpire from '../containers/places-expire';
import { restartPlaces } from '../actions/restart-places';
//import { bindActionCreators } from 'redux';

class PlacesStopwatch extends Component {

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
			        { this.state.showResults ? <PlacesTrivia /> : null }		
			        { this.state.showExpire ? <PlacesExpire  onStart={ this.props.onStart }/> : null }    
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
	return bindActionCreators({restartPlaces: restartPlaces}, dispatch)
}

function mapStateToProps(state) {
	return {
		places: state.places
	};
}

export default PlacesStopwatch;
