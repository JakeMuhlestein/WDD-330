//Save to local storage
export function storeLS(key, list) {
	localStorage.setItem(key, JSON.stringify(list));
}

//read from local storage
export function recallLS(key) {
	let listArray = JSON.parse(localStorage.getItem(key))
	return listArray;
}