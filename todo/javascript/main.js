//I was very stuck on the completion of this section. I heavily referenced the examples provided
//I am doing what I can to make this my own and am following the logic that is being presented.
//I am not doing a simple copy and paste of this code, but rather taking the time to learn and 
//understand what is required for a functioning app.

import {removeTask, completeTasks, showList, notFinished, finished, addTask, tasks, toDoForm, toDoList, finishedList, unfinishedList} from './todofunc.js';
import {storeLS, recallLS} from './storeinfo.js';
//import * as utility from './helperfunc.js';

//Event Listeners
toDoForm.addEventListener("submit", addTask);
toDoForm.addEventListener("submitSuccess", () => showList(toDoList));
toDoForm.addEventListener("submitSuccess", storeLS);


//Event listener for clicks
tasks.addEventListener("click", function(event){
    const taskID = parseInt(event.target.value);
    if(event.target.matches("button")) {
        removeTask(taskID);
    };

    if(event.target.matches("input[type = 'checkbox']")) {
        completeTasks(taskID);

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
        showList(notFinished);

    };
    //filter tasks that are compelted
    if(event.target.matches("#compTasks")) {
        finished();
        showList(finished);
    };
});

//This is calling the get tasks function that retrieves information from local storage
recallLS();