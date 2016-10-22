import { combineReducers } from 'redux';
import MovieReducer from './reducer-movie';
import ActiveMovieReducer from './reducer-active-movie';
import CategoryReducer from './reducer-category';
import ActiveCategoryReducer from './reducer-active-category';

const allReducers = combineReducers({
	movies: MovieReducer,
	activeMovie: ActiveMovieReducer,
	categories: CategoryReducer,
	activeCategory: ActiveCategoryReducer,
});

export default allReducers;