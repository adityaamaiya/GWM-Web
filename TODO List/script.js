// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">Delete</button>`;
      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  }
  
  // Function to remove a task
  function removeTask(button) {
    const listItem = button.parentElement;
    const taskList = listItem.parentElement;
    taskList.removeChild(listItem);
  }
  
  // Event listener for the 'Add' button
  document.getElementById('addButton').addEventListener('click', addTask);
  
  // Event listener for pressing 'Enter' key in the input field
  document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      addTask();
    }
  });
  