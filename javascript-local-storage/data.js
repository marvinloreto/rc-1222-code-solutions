/* exported todos */

var todos = [];
var previousToDosJSON = localStorage.getItem('javascript-local-storage');
if (previousToDosJSON !== null) {
  todos = JSON.parse(previousToDosJSON);
}

function toDoList(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);

}

window.addEventListener('beforeunload', toDoList);
