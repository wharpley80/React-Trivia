import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shuffleArray from 'shuffle-array';
import { selectMovie } from '../actions/guess-movie';

class MovieTrivia extends Component {

	createMovieQuestion() {
		var size = 1;
		return this.props.movie.slice(0, size).map((movie) => {

				

			return(
				<li key={ movie.id }>
					<p className="questions">{ movie.question }</p>
					<ul className="question-cont">
						<button className="question"><li onClick={() => this.props.selectMovie(movie.option_1, movie.answer)}>{ movie.option_1 }</li></button>
						<button className="question"><li onClick={() => this.props.selectMovie(movie.option_2, movie.answer)}>{ movie.option_2 }</li></button>
						<button className="question"><li onClick={() => this.props.selectMovie(movie.option_3, movie.answer)}>{ movie.option_3 }</li></button>
						<button className="question"><li onClick={() => this.props.selectMovie(movie.option_4, movie.answer)}>{ movie.option_4 }</li></button>
					</ul>
					
				</li>
			);
		});
	}

	render() {
		return (
			<div className="list-cont">
				<ul>
					{ this.createMovieQuestion() }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movie: shuffleArray(state.movies)
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ selectMovie: selectMovie }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieTrivia);
