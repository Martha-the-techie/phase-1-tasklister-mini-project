const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');

function addTask(event) {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task === '') {
    return;
  }
  const taskItem = document.createElement('li');
  taskItem.textContent = task;
  taskList.appendChild(taskItem);
  taskInput.value = '';
}

taskForm.addEventListener('submit', addTask);
