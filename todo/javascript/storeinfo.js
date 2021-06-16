import {toDoList, toDoForm} from'./todofunc.js'

// Had difficulty coming up with this. I referenced other students examples to try to figure it out.

//Save to local storage
export function storeLS() {
	localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

//Read from local storage
export function recallLS() {
	let listArray = JSON.parse(localStorage.getItem("toDoList"));
	if (listArray.length >= 1) {
		toDoList.push(...listArray);
		toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));
	}
	
}