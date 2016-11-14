export const selectPlaces = (guesser1, guesser2) => {
	if (guesser1 == guesser2) {
		return {
			type: "PLACES_GUESS1",
			payload: guesser1
		}
	} else {
		return {
			type: "PLACES_GUESS2",
			payload: guesser1
		}
	}	
};