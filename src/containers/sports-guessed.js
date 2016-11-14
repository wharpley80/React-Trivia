import React, { Component } from 'react';
import { connect } from 'react-redux';

class SportsGuessed extends Component {

	render() {
		if (!this.props.playerAnswer) {
			return (<h4>Make a Selection...</h4>);
		}
		return (
			<div>
				<h2>{this.props.playerAnswer}</h2>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		playerAnswer: state.sportsGuess
	};
}

export default connect(mapStateToProps)(SportsGuessed);