import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/select-cat';
import NavLink from '../components/NavLink';

class Intro extends Component {

	createSelectedCategory() {
		return this.props.category.map((category) => {
			return (
				<button key={category.id} onClick={() => this.props.selectCategory(category)}>
					{category.category}
				</button>
			);
		});
	}

	render() {
		return (
			<ul>
				{this.createSelectedCategory()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		category: state.categories
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectCategory: selectCategory}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Intro);
