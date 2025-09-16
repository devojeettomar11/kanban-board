export function createTaskElement(task) {
    const taskEl = document.createElement('div');
    taskEl.classList.add('task');
    taskEl.setAttribute('draggable', 'true');
    taskEl.setAttribute('data-id', task.id);

    taskEl.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
    `;

    return taskEl;
}
