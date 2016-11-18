import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameRules extends Component {

	render() {

		return (
			<div  className="rules-container">
				<div className="rules-cont">
	      	<h2 className="rules-title">Rules</h2>
	      	<hr />
	      	<div>
		        <ol className="rules-list">
		        	<li className="rules">You have 60 seconds per round.</li>
		        	<li className="rules">+1 for every Correct answer.</li>
		        	<li className="rules">-1 for every Incorrect answer.</li>
		        	<li className="rules">Let&#39;s see what you got!</li>
		        </ol>
	        </div>
	      </div>
      </div>
		);
	}
}

export default GameRules;