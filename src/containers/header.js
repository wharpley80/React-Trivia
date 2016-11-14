import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavLink from '../components/NavLink';

class Header extends Component {

	render() {
		return (
			<header>
				<NavLink to="/"><h1 className="my-title">ReacTrivia</h1></NavLink>
        <ul className="main-nav">
          <li className="nav-btn"><NavLink to="/">Home</NavLink></li>
          <li className="nav-btn"><NavLink to="/movies">Movies</NavLink></li>
          <li className="nav-btn"><NavLink to="/sports">Sports</NavLink></li>
          <li className="nav-btn"><NavLink to="/places">Places</NavLink></li>
        </ul>       
      </header>
		);
	}

}

export default Header;