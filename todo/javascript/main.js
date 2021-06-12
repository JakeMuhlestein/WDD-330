import ToDos from './todofunc.js';

const ToDoList = new ToDos('todo');
const input = document.getElementById('newTask');
const addNew = document.getElementById('addTask');



window.addEventListener('load', () => {
  myToDoList.showToDoList();
  myToDoList.addTabListeners();
});

addNew.addEventListener('click', () => {
  myToDoList.addToDo();
});

inputField.addEventListener('keyup', function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    addNew.click();
  }
});
