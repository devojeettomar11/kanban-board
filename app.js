import { Storage } from './storage.js';
import { createTaskElement } from './domUtils.js';
import { setupDragAndDrop } from './dragDropHandler.js';

let tasks = Storage.loadTasks();

const taskForm = document.getElementById('task-form');
const todoContainer = document.getElementById('todo');
const inProgressContainer = document.getElementById('in-progress');
const doneContainer = document.getElementById('done');

// Render tasks from storage
function renderTasks() {
    [todoContainer, inProgressContainer, doneContainer].forEach(c => c.innerHTML = '');
    tasks.forEach(task => {
        const taskEl = createTaskElement(task);
        document.getElementById(task.status).appendChild(taskEl);
    });
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('task-title').value.trim();
    const description = document.getElementById('task-desc').value.trim();
    if (!title || !description) return;

    const newTask = {
        id: Date.now().toString(),
        title,
        description,
        status: 'todo'
    };

    tasks.push(newTask);
    Storage.saveTasks(tasks);
    renderTasks();

    taskForm.reset();
});

// Initialize
renderTasks();
setupDragAndDrop();
