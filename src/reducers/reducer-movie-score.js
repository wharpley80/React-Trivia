let initialState = 0;

export default function (state=initialState, action) {
	switch(action.type) {
		case "MOVIE_RESTART":
			console.log("My restart");
			return state=0;
			break;
		case "MOVIE_GUESS1":
		console.log(state);
			state = state+1;
			return state;
			break;
		case "MOVIE_GUESS2":
		console.log(state);
			return state-1;
			break;
	}
	return state;
}