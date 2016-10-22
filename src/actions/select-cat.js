export const selectCategory = (category) => {
	//console.log("You clicked on movie: ", category.category);
	return {
		type: "CATEGORY_SELECTED",
		payload: category
	}
};