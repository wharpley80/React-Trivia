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
		      someContent: false,
		    } 
		    
		  },

		  componentWillMount: function() {
        setTimeout(this.onTick, 1000); 
        setTimeout(this.onTicker, 2000);
        setTimeout(this.onTicked, 3000); 
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

		  onTicked: function() {
	      this.setState({  	
	        someContent: true,
	      });
		  },

		  render: function() {

				return (
					<div>
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
					<div className="content-cont">
					  <div className="welcome-content-cont">
					  	{ this.state.someContent ? 
						  <ReactCSSTransitionGroup
					      transitionName="example"
					      transitionAppear={true}
					      transitionAppearTimeout={2000}				      
					      transitionEnter={false}
					      transitionLeaveTimeout={200}
					      transitionLeave={true}>
						    <p>
						    	Welcome to ReactTrivia! If you love Trivia then you&#39;ve come to the right place. First you choose
						    	your category whether it&#39;s <NavLink to="/movies">Movies</NavLink>, <NavLink to="/sports">Sports</NavLink>, 
						    	or <NavLink to="/places" >Places</NavLink>. Once you click start you&#39;ll have 60 seconds 
						      to see how high you can score. All questions are multiple choice, and you&#39;ll get 1 point for every 
						    	correct answer. The catch is that you get -1 point for every incorrect answer. After the 60 seconds 
						    	is up you can reset you score and start over or just keep playing to see how high you can go. Test 
						    	your skills and see how high you can score. 
						    </p>	    	
							</ReactCSSTransitionGroup>
							: null }			
						</div>
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