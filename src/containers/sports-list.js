import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shuffleArray from 'shuffle-array';
import { selectSports } from '../actions/guess-sports';

class SportsTrivia extends Component {

	createSportsQuestion() {
		var size = 1;
		return this.props.sports.slice(0, size).map((sports) => {
			return(
				<li key={sports.id}>
					<p className="questions">{ sports.question }</p>
					<ul>
						<button className="question"><li onClick={() => this.props.selectSports(sports.option_1, sports.answer)}>{sports.option_1}</li></button>
						<button className="question"><li onClick={() => this.props.selectSports(sports.option_2, sports.answer)}>{sports.option_2}</li></button>
						<button className="question"><li onClick={() => this.props.selectSports(sports.option_3, sports.answer)}>{sports.option_3}</li></button>
						<button className="question"><li onClick={() => this.props.selectSports(sports.option_4, sports.answer)}>{sports.option_4}</li></button>
					</ul>
					
				</li>
			);
		});
	}

	render() {
		return (
			<div className="list-cont">
				<ul className="question-cont">
					{this.createSportsQuestion()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		sports: shuffleArray(state.sports)
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectSports: selectSports}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SportsTrivia);