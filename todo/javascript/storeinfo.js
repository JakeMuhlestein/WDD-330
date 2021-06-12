// Had difficulty coming up with this. I referenced other students examples to try to figure it out.

//Save to local storage
export function storeLS(key, list) {
	localStorage.setItem(key, JSON.stringify(list));
}

//Read from local storage
export function recallLS(key) {
	let listArray = JSON.parse(localStorage.getItem(key))
	return listArray;
}