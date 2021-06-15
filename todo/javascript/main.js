import ToDos from './todofunc.js';
import from './storeinfo.js';
import * as utility from './helperfunc.js';

//Event Listeners
listForm.addEventListener("submit", addTask);
listForm.addEventListener("submitSuccess"), () => showList(list);
listForm.addEventListener("submitSuccess", storeLS);


//Event listener for clicks
tasks.addEventListener("click", function(event){
    const id = parseInt(event.target.value);
    if(event.target.matches("button")) {
        deleteItem(id);
    };

    if(event.target.matches("input[type = 'checkbox']")) {
        completedTasks(id);

    };
});

// Listners for filter button clicks

//Filters by all tasks
document.querySelector(`.filter-button`).addEventListener("click", function(event){
    if(event.target.matches("#allTasks")) {
        displayTasks(toDoList);
        
    };
    //filters by unfinished tasks
    if(event.target.matches("#pendingTasks")) {
        filterNotFinished();
        displayTasks(unfinishedList);

    };
    //filter tasks that are compelted
    if(event.target.matches("#compTasks")) {
        filterFinished();
        displayTasks(finishedList);
    };
});

//This is calling the get tasks function that retrieves information from local storage
getTasks();