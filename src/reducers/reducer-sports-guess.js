export default function (state=null, action) {
	switch(action.type) {
		case "SPORTS_GUESS":
		console.log('Im here');
			return action.payload;
			break;
	}
	return state;
}