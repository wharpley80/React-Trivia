import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateOnChange from 'react-animate-on-change';

class SportsScore extends Component {

	render() {
  
    var score = this.props.playerScore;
		
		var MyScore = React.createClass({

			getInitialState: function() {
		    return {
		      scoreColor: "message-clicked-green",
		    } 
		  },

		  componentWillMount: function() {
		    if ( score < 0 ) {
      		this.setState({  
      			scoreColor: "message-clicked-red",
      		});
      	} else {
      		this.setState({  
      			scoreColor: "message-clicked-green",
      		});
      	}
		  },
		  
			render: function() {
				return (
					<div className="score-cont">
						<h2 className="player-score">Your Score: 
						<AnimateOnChange
					    baseClassName="message"
					    animationClassName={ this.state.scoreColor }
					    animate={ score != 0 }> { score }
					  </AnimateOnChange>
		        </h2>
					</div>
				);
			}

	  });

	  return (
			<MyScore />
		);

	}	

}

function mapStateToProps(state) {
	return {
		playerScore: state.sportsScore
	};
}

export default connect(mapStateToProps)(SportsScore);