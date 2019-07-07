export const selectMovie = (guesser1, guesser2) => {
	if (guesser1 == guesser2) {
		return {
			type: "MOVIE_GUESS1",
			payload: guesser1
		}
	} else {
		return {
			type: "MOVIE_GUESS2",
			payload: guesser1
		}
	}	
};
