import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-detail';

class TriviaCategory extends Component {

	render() {
		if (!this.props.category) {
			return (<h4>Select a Category</h4>);
		}
		return (
			<div>
				<h2>{this.props.category.category}</h2>
				<button>Start</button>
				<MovieList />
				<h3>Your Movie</h3>
				<MovieDetail />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		category: state.activeCategory
	};
}

export default connect(mapStateToProps)(TriviaCategory);