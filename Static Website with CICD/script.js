// Function to add a new task with complete and delete buttons
function addTask(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    // Create a span for the task text
    const taskText = document.createElement('span');
    taskText.textContent = task;

    // Create the Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';

    // Add event listener to mark task as completed
    completeBtn.addEventListener('click', function() {
        taskText.classList.toggle('completed');
    });

    // Create the Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Add event listener for delete
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(taskText);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Modify the event listener for the Add Task button
const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
        taskInput.focus();
    }
});