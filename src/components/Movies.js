import React, { Component } from 'react';
import Header from '../containers/header';
import MovieScore from '../containers/movie-score';
import MovieStopwatch from '../containers/movie-stopwatch';
import Footer from '../components/Footer';

class Movies extends Component {
    render() {
        return (
    	    <div>
                <Header />
                <div className="container">
                    <div className="body-head">
                        <h1 className="page-title">Movie Trivia</h1>
                        <MovieScore />
                    </div>		
                    <MovieStopwatch />
                 </div>
       
            </div>
        );
    }
}

export default Movies;