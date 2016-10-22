export const selectMovie = (movie) => {
	console.log("You clicked on movie: ", movie.question);
	return {
		type: "MOVIE_SELECTED",
		payload: movie
	}
};
