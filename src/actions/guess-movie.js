export const selectMovie = (guesser1, guesser2) => {
	if (guesser1 == guesser2) {
		console.log("You clicked on movie: correct");
		return {
			type: "MOVIE_GUESS1",
			payload: guesser1
		}
	} else {
		console.log("You clicked on movie: incorrect");
		return {
			type: "MOVIE_GUESS2",
			payload: guesser1
		}
	}	
};
