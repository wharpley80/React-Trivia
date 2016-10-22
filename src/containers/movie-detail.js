import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {

	render() {
		if (!this.props.movie) {
			return (<h4>Select a Movie</h4>);
		}
		return (
			<div>
				<img src={this.props.movie.img_src} />
				<h2>{this.props.movie.answer}</h2>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movie: state.activeMovie
	};
}

export default connect(mapStateToProps)(MovieDetail);