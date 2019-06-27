import { combineReducers } from 'react-redux';
import MovieReducer from './reducer-movie';
import SportsReducer from './reducer-sports';
import SportsGuessReducer from './reducer-sports-guess';
import SportsScoreReducer from './reducer-sports-score';
import ActiveMovieReducer from './reducer-active-movie';
import CategoryReducer from './reducer-category';
import ActiveCategoryReducer from './reducer-active-category';
import MovieGuessReducer from './reducer-movie-guess';
import MovieScoreReducer from './reducer-movie-score';
import PlacesReducer from './reducer-places';
import PlacesScoreReducer from './reducer-places-score';

const allReducers = combineReducers({
	movies: MovieReducer,
	movieGuess: MovieGuessReducer,
	movieScore: MovieScoreReducer,
	activeMovie: ActiveMovieReducer,
	categories: CategoryReducer,
	activeCategory: ActiveCategoryReducer,
	sports: SportsReducer,
	sportsGuess: SportsGuessReducer,
	sportsScore: SportsScoreReducer,
	places: PlacesReducer,
	placesScore: PlacesScoreReducer,
});

export default allReducers;