function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a valid task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${taskInput.value}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function deleteTask(button) {
    const taskList = document.getElementById('taskList');
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}
