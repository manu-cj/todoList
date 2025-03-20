const checkTask = (taskId) => {
    const tasks = JSON.parse(localStorage.getItem('todoList')) || [];
    const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, status: task.status === 'done' ? 'todo' : 'done' };
        }
        return task;
    });
    localStorage.setItem('todoList', JSON.stringify(updatedTasks));
    
}

export default checkTask;
