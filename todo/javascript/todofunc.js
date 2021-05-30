/**************************
 * 
 * ***********************/
let toDoList = null;

export default class ToDos {
	//main class contructor
	constructor(elementID) {
			this.parentElement = document.getElementById(elementID)
			this.LSkey = this.parentElement.id;

	}
	//Add list items
    addToDo(){
       	const newTask = document.getElementById('newTask');
       	saveToDo(this.LSkey, taskContent);
       	this.showToDoList();
    }

    //show list items
    showAllToDos(){
    	getToDos(this.LSkey);
    	displayToDos(this.parentElement, toDoList);
    	if(toDoList != null) {
    		this.addEventListeners
    	}

    } 

    //add Event Listener
    addEventListeners() {
		const listOfItems = Array.from(this.parentElement.children);
		if (listOfItems.length > 0) {
			listOfItems.forEach (item => {
				item.children[0].addEventListener('click' event=> {
					this.toDoDone(event.currentTarget.id);
				})
				item.children[2].addEventListener('click' event => {
					this.toDoDelete(event.currentTarget.parentElement.children[0].id);
				})
				
			})
		}

    }

    //check box functionality
    toDoDone(item) {
    	let task = toDoList.findIndex(task => task.id == item);
    	toDoList[task].completed = !toDoList[task].completed;
    	storeHelp.storeLS(this.LSkey, toDoList);

    }





}


import * as storeHelp from './storeinfo.js'
import * as helper from './helperfunc.js'