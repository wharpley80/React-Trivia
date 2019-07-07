let initialState = 0;

export default function (state=initialState, action) {
	switch(action.type) {
		case "SPORTS_RESTART":
			return state=0;
			break;
		case "SPORTS_GUESS1":
			return state+1;
			break;
		case "SPORTS_GUESS2":
			return state-1;
			break;
	}
	return state;
}