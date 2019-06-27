import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shuffleArray from 'shuffle-array';
import { selectPlaces } from '../actions/guess-places';

class PlacesTrivia extends Component {

	createPlacesQuestion() {
		var size = 1;
		return this.props.places.slice(0, size).map((places) => {

				

			return(
				<li key={places.id}>
					<p className="questions">{ places.question }</p>
					<img src={ places.img } className="question-img" />
					<ul>
						<button className="question"><li onClick={() => this.props.selectPlaces(places.option_1, places.answer)}>{places.option_1}</li></button>
						<button className="question"><li onClick={() => this.props.selectPlaces(places.option_2, places.answer)}>{places.option_2}</li></button>
						<button className="question"><li onClick={() => this.props.selectPlaces(places.option_3, places.answer)}>{places.option_3}</li></button>
						<button className="question"><li onClick={() => this.props.selectPlaces(places.option_4, places.answer)}>{places.option_4}</li></button>
					</ul>
					
				</li>
			);
		});
	}

	render() {
		return (
			<div className="places-list-cont">
				<ul className="question-cont">
					{this.createPlacesQuestion()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		places: shuffleArray(state.places)
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ selectPlaces: selectPlaces }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PlacesTrivia);