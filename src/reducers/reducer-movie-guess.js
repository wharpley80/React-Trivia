export default function (state=null, action) {
	switch(action.type) {
		case "MOVIE_GUESS" :
			return action.payload;
			break;

	}
	return state;
}
