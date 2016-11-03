import { combineReducers } from 'redux';
import MovieReducer from './reducer-movie';
import SportsReducer from './reducer-sports';
import ActiveMovieReducer from './reducer-active-movie';
import SportsGuessReducer from './reducer-sports-guess';
import CategoryReducer from './reducer-category';
import ActiveCategoryReducer from './reducer-active-category';
import guessReducer from './reducer-movie-guess';
import SportsScoreReducer from './reducer-sports-score';

const allReducers = combineReducers({
	movies: MovieReducer,
	activeMovie: ActiveMovieReducer,
	categories: CategoryReducer,
	activeCategory: ActiveCategoryReducer,
	guessed: guessReducer,
	sports: SportsReducer,
	sportsGuess: SportsGuessReducer,
	sportsScore: SportsScoreReducer,
});

export default allReducers;