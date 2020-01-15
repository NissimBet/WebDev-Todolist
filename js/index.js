function init () {
  let todoForm = document.getElementsByClassName('todoForm')[0];
  let todoList = document.getElementsByClassName('listOfTodos')[0];

  let clearTodosButton = document.getElementsByClassName('clearButton')[0];
  let markTodosButton = document.getElementsByClassName('markAllButton')[0];
  let deleteTodoButton = document.getElementsByClassName('deleteButton')[0];

  let todoItem = (value) => `
    <label class='todo-item'>
      <input type='checkbox' name='todoItem'>
        ${value}
    </label>
  `;

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();    

    if (todoForm.todoDescription.value === ''){
      return; 
    }
    
    todoList.innerHTML += (todoItem(todoForm.todoDescription.value));
    todoForm.todoDescription.value = '';
  });

  clearTodosButton.addEventListener('click', event => {
    event.preventDefault();

    for(let labelChild of todoList.children) {
      labelChild.firstElementChild.checked = false;
    }
  });

  markTodosButton.addEventListener('click', event => {
    event.preventDefault();

    for(let labelChild of todoList.children) {
      labelChild.firstElementChild.checked = true;
    }
  });

  deleteTodoButton.addEventListener('click', event => {
    event.preventDefault();

    todoList.innerHTML = '';
  })
}

init();
