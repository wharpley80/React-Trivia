let initialState = 0;

export default function (state=initialState, action) {
	switch(action.type) {
		case "PLACES_RESTART":
			return state=0;
			break;
		case "PLACES_GUESS1":
			return state+1;
			break;
		case "PLACES_GUESS2":
			return state-1;
			break;
	}
	return state;
}