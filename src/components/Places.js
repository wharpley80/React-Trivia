import React, { Component } from 'react';
import Header from '../containers/header';
import PlacesScore from '../containers/places-score';
import PlacesStopwatch from '../containers/places-stopwatch';
import Footer from '../components/Footer';

class Places extends Component {
    render() {
        return (
    	    <div>
                <Header />
                <div className="container">
                    <div className="body-head">
                        <h1 className="page-title">Places Trivia</h1>
                        <PlacesScore />
                    </div>
                    <PlacesStopwatch />
                </div>
            </div>
        );
    }
}

export default Places;