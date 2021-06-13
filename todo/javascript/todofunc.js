import * as storeHelp from './storeinfo.js'
import * as helper from './helperfunc.js'
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

    //show list items
    showAllToDos(){
    	getToDos(this.LSkey);
    	displayToDos(this.parentElement, toDoList);
    	if(toDoList != null) {
    		this.addEventListeners
    	}
    } 

	//Add list items
    addToDo(){
       	const newTask = document.getElementById('newTask');
       	saveToDo(this.LSkey, taskContent);
       	this.showToDoList();
    }

    //delete list item
    toDoDelete(item) {
    	let task = toDoList.findIndex(task => task.id == item);
    	toDoList.splice(task, 1);
    	storeHelp.storeLS(this.LSkey, toDoList);
    	this.showAllToDos();
    }

    //check box functionality
    toDoDone(item) {
    	let task = toDoList.findIndex(task => task.id == item);
    	toDoList[task].completed = !toDoList[task].completed;
    	storeHelp.storeLS(this.LSkey, toDoList);
    	itemDone(item);

    }

    filterList(status){
    	status = filterBy(status);
    	const filter = toDoList.filter(task => {
    		if (status != null) {
    			return task.completed == status;
    		}
    		else {
    			return task;
    		}
    	})
    	displayToDos(this.parentElement, filter);
    	this.addEventListeners();
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
}


//make the list show up in HTML
function displayToDos(parent, thisList) {


    parent.innerHTML = '';
    if(thisList != null && thisList.length > 0){
    thisList.forEach(taskObject => {
        parent.appendChild(renderOneToDo(taskObject));
    })
    }else {
        const emptyList = document.createElement('li');
        emptyList.innerHTML = `No Tasks Found`
        parent.appendChild(emptyList);
    }

}

//make one item show up in HTML
function renderOneToDo(task) {
    const oneTask = document.createElement('li');
    task.completed ? oneTask.classList.toggle('completed') : '';
    oneTask.innerHTML = 
        `<input id="${task.id}" name="${task.content}" type="checkbox" value="none" ${task.completed ? 'checked' : ''}>
        <label for="${task.id}">${task.content}</label>
        <div class="remove">X</div>`;
    return oneTask;
}

