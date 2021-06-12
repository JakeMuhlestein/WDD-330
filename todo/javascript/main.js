import ToDos from './todofunc.js';

const newToDoList = new ToDos('todo');
const input = document.getElementById('newTask');
const addNew = document.getElementById('addTask');



window.addEventListener('load', () => {
  newToDoList.showToDoList();
  newToDoList.addTabListeners();
});

addNew.addEventListener('click', () => {
  newToDoList.addToDo();
});

inputField.addEventListener('keyup', function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    addNew.click();
  }
});
