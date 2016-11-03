import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shuffleArray from 'shuffle-array';
import { selectMovie } from '../actions/index';

class MovieList extends Component {

	createMovieItems() {
		var size = 1;
		return this.props.movie.slice(0, size).map((movie) => {
			return(
				<li 
					key={movie.id} 
					onClick={() => this.props.selectMovie(movie)}
				>
					{movie.question}
				</li>
			);
		});
	}

	render() {
		return (
			<ul>
				{this.createMovieItems()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		movie: shuffleArray(state.movies)
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectMovie: selectMovie}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieList);