export const selectSports = (guesser1, guesser2) => {
	if (guesser1 == guesser2) {
		return {
			type: "SPORTS_GUESS1",
			payload: guesser1
		}
	} else {
		return {
			type: "SPORTS_GUESS2",
			payload: guesser1
		}
	}	
};