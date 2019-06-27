import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { restartSports } from '../actions/restart-sports';

class SportsExpire extends Component {

	render() {
		let initialState = {
			restart: [{
				name: "Restart",
			}]
		}

		return (
			<div className="expire-cont">
				<p>
					Your time has expired, and your final score is {this.props.playerScore}. If you&#39;d like to 
					play again then click<button className="btn"onClick={() => this.props.restartSports(initialState)}>Reset</button> 
					to set your score back to 0. If you don&#39;t wish to reset your score, then you can continue 
					to play and add onto your score!
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		playerScore: state.sportsScore
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({restartSports: restartSports}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SportsExpire);
