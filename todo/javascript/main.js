import {toDoList, toDoForm, tasks, removeTask, completeTasks, showList, notFinished, finished, addTask} from './todofunc.js';
import {storeLS, recallLS} from './storeinfo.js';
//import * as utility from './helperfunc.js';

//Event Listeners
listForm.addEventListener("submit", addTask);
listForm.addEventListener("submitSuccess"), () => showList(list);
listForm.addEventListener("submitSuccess", storeLS);


//Event listener for clicks
tasks.addEventListener("click", function(event){
    const taskID = parseInt(event.target.value);
    if(event.target.matches("button")) {
        removeTask(taskID);
    };

    if(event.target.matches("input[type = 'checkbox']")) {
        completedTasks(taskID);

    };
});

// Listners for filter button clicks

//Filters by all tasks
document.querySelector(`.filterButton`).addEventListener("click", function(event){
    if(event.target.matches("#allTasks")) {
        showList(toDoList);
        
    };
    //filters by unfinished tasks
    if(event.target.matches("#pendingTasks")) {
        notFinished();
        showList(unfinishedList);

    };
    //filter tasks that are compelted
    if(event.target.matches("#compTasks")) {
        finished();
        showList(finishedList);
    };
});

//This is calling the get tasks function that retrieves information from local storage
getTasks();