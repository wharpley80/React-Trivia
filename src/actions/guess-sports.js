export const selectSports = (guesser1, guesser2) => {
	if (guesser1 == guesser2) {
		console.log("You clicked on movie: correct");
		return {
			type: "SPORTS_GUESS1",
			payload: guesser1
		}
	} else {
		console.log("You clicked on movie: incorrect");
		return {
			type: "SPORTS_GUESS2",
			payload: guesser1
		}
	}	
};