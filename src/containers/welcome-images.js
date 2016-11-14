import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavLink from '../components/NavLink';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnimateOnChange from 'react-animate-on-change';

class WelcomeImages extends Component {

	render() {

		var PlayImages = React.createClass({

			getInitialState: function() {
		    return {
		      message: "Movies",
		      message2: "Sports",
		      message3: "Places",
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
					<div className="welcome-img-cont">
					  <div className="welcome-col">
						  <ReactCSSTransitionGroup
					      transitionName="example"
					      transitionAppear={true}
					      transitionAppearTimeout={2000}				      
					      transitionEnter={false}
					      transitionLeaveTimeout={200}
					      transitionLeave={true}>
							    <NavLink to="/movies">
										{ this.state.message }
										<img src="./src/img/movies.jpeg" className="welcome-img" />
									</NavLink>
							</ReactCSSTransitionGroup>			
						</div>
						<div className="welcome-col">
							{ this.state.someCondition ? 
								<ReactCSSTransitionGroup
						      transitionName="example"
						      transitionAppear={true}
						      transitionAppearTimeout={2000}				      
						      transitionEnter={false}
						      transitionLeaveTimeout={200}
						      transitionLeave={true}>
										<NavLink to="/sports">
											{ this.state.message2 }
											<img src="./src/img/baseball.jpeg" className="welcome-img" />
										</NavLink>
							  </ReactCSSTransitionGroup> 
							: null }	
						</div>
						<div className="welcome-col">
							{ this.state.someOther ? 
						    <ReactCSSTransitionGroup
						      transitionName="example"
						      transitionAppear={true}
						      transitionAppearTimeout={2000}				      
						      transitionEnter={false}
						      transitionLeaveTimeout={200}
						      transitionLeave={true}>
										<NavLink to="/places">
											{ this.state.message3 }
											<img src="./src/img/places.jpg" className="welcome-img" />
										</NavLink>
								</ReactCSSTransitionGroup> 
							: null }	
						</div>
					</div>
		    );

			}

		});

		return (
			<PlayImages />
		);

	}

}

export default WelcomeImages;