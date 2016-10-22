import React, { Component } from 'react';
//import Visual from '../data/visual';

class Home extends Component {  

	  render() {

	  	var Superhero = React.createClass({
	  		propTypes: {
	  			//name: React.PropTypes.string,
	  		},

	  		getInitialState: function() {
	  			return {
	  				name: 'Green Latern',
	  			}
	  		},

	  		changeSuperhero: function(e) {
	  			this.setState({name: e.target.value});
	  		},
	  		
	  		render: function() {
	  			return (
						<div>
							<h1>{this.state.name}</h1>
							<input type="text" value={this.state.name} onChange={this.changeSuperhero} />
						</div>
					);
	  		}

	  	});

  	let myvisual = Visual;
    return (
    	<div className="main-content home">
    		<Superhero />
        <h2>Home</h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
        <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />
        <h3>Sonic</h3>
        <img src="./src/img/sonic_ring.png" />
      </div>

    );
  }
}

export default Home;