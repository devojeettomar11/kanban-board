export const Storage = {
    saveTasks: (tasks) => {
        localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
    },

    loadTasks: () => {
        return JSON.parse(localStorage.getItem('kanbanTasks')) || [];
    }
};
