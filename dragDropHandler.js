export function setupDragAndDrop() {
    const taskContainers = document.querySelectorAll('.task-container');

    taskContainers.forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        container.addEventListener('drop', (e) => {
            const taskId = e.dataTransfer.getData('text/plain');
            const taskEl = document.querySelector(`[data-id="${taskId}"]`);
            container.appendChild(taskEl);

            updateTaskStatus(taskId, container.id);
        });
    });

    document.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('task')) {
            e.dataTransfer.setData('text/plain', e.target.dataset.id);
        }
    });
}

function updateTaskStatus(taskId, newStatus) {
    const tasks = JSON.parse(localStorage.getItem('kanbanTasks')) || [];
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = newStatus;
        localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
    }
}
