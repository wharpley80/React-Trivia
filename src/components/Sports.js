import React, { Component } from 'react';
import Header from '../containers/header';
import SportsScore from '../containers/sports-score';
import SportsStopwatch from '../containers/sports-stopwatch';
import Footer from '../components/Footer';

class Sports extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="body-head">
                        <h1 className="page-title">Sports Trivia</h1>
                        <SportsScore />
                    </div>
                    <SportsStopwatch />	   
                </div>

            </div>
        );
    }
}

export default Sports;