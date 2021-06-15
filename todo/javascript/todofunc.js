//I was very stuck on the completion of this section. I heavily referenced the examples provided
//I am doing what I can to make this my own and am following the logic that is being presented.
//I am not doing a simple copy and paste of this code, but rather taking the time to learn and 
//understand what is required for a functioning app.

// Variables
export { removeTask, completeTasks, showList, notFinished, finished, addTask};
export const tasks = document.querySelector(`.todos`);
export const toDoForm = document.querySelector(`.toDo`);
export let toDoList = [];
export let finishedList = [];
export let unfinishedList = [];

//Remove task from todo list
function removeTask(taskID){

    toDoList = toDoList.filter(toDo => toDo.taskID !== taskID);
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));

} 

//List of completed tasks
function completeTasks(taskID){

    const taskRef = toDoList.find(toDo => toDo.taskID == taskID);

    taskRef.completed = !taskRef.completed;
    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));

}

//
function showList(arrayName){

    const listItems = arrayName.map(toDo => 
        `<li class = "listItem">
        <input type = "checkbox" ${toDo.completed && "checked"} value = "${toDo.TaskID}" >
        <span class = "todo_item_name"> <p>${toDo.content} </p></span>
        <button aria-label = "Remove ${toDo.content}" value = "${toDo.TaskID}" >X</button> 
        </li>`).join(``);

    tasks.innerHTML = listItems;

} 

//Create list of unfinished tasks
function notFinished(){

    unfinishedList = toDoList.filter(toDoSingle => toDoSingle.completed == false);

}

//Create list of finish tasks
function finished(){

    finishedList = toDoList.filter(toDoSingle => toDoSingle.completed == true);
}


function addTask(event){

    event.preventDefault();
    
    const taskName = document.getElementById(`newTask`).value
    
    const toDo = { 
        id : Date.now(), 
        content: taskName, 
        completed: false 
    };


    toDoList.push(toDo);

    document.getElementById(`newTask`).value = ``;


    toDoForm.dispatchEvent(new CustomEvent("tasksSubmitted"));
} 

















export { submitTask,displayTasks, deleteItem, completedTasks, filterFinished, filterNotFinished};
