export default function (state=null, action) {
	switch(action.type) {
		case "CATEGORY_SELECTED":
			return action.payload;
			break;
	}
	return state;
}