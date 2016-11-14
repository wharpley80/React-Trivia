export const restartSports = (restart) => {
	console.log("Restart sports", restart);
	return {
		type: "SPORTS_RESTART",
		payload: restart
	}
};