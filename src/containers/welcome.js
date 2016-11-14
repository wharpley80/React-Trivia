import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateOnChange from 'react-animate-on-change';

class Welcome extends Component {

	render() {

		var ComePlay = React.createClass({

			getInitialState: function() {
		    return {
		      message: "Let's",
		      message2: "Play",
		      message3: "ReacTrivia!",
		      someCondition: false,
		      someOther: false,
		    } 
		    
		  },

		  componentWillMount: function() {
        setTimeout(this.onTick, 2000); 
        setTimeout(this.onTicker, 4000);
		  },

		  onTick: function() {
	      this.setState({  	
	        someCondition: true,
	      });
		  },

		  onTicker: function() {
	      this.setState({  	
	        someOther: true,
	      });
		  },

		  render: function() {
				return (
					<div>
					<div className="welcome-cont">
						<ReactCSSTransitionGroup
				      transitionName="example"
				      transitionAppear={true}
				      transitionAppearTimeout={2000}				      
				      transitionEnter={false}
				      transitionLeaveTimeout={200}
				      transitionLeave={true}>
				      <h1 className="true">{ this.state.message }</h1>
				    </ReactCSSTransitionGroup>
				    { this.state.someCondition ? 
				    <ReactCSSTransitionGroup
				      transitionName="example"
				      transitionAppear={true}
				      transitionAppearTimeout={2000}				      
				      transitionEnter={false}
				      transitionLeaveTimeout={200}
				      transitionLeave={true}>
				      <h1 className="true2">{ this.state.message2 }</h1>
				    </ReactCSSTransitionGroup> : null }		
				    { this.state.someOther ? 
				    <ReactCSSTransitionGroup
				      transitionName="example"
				      transitionAppear={true}
				      transitionAppearTimeout={2000}				      
				      transitionEnter={false}
				      transitionLeaveTimeout={200}
				      transitionLeave={true}>
				      <h1 className="true3">{ this.state.message3 }</h1>
				    </ReactCSSTransitionGroup> : null }					
					</div>
					</div>
				);
			}

		});

		return (
			<ComePlay />
		);

	}

}

export default Welcome;