const deleteTask = (taskId) => {
    const tasks = JSON.parse(localStorage.getItem('todoList')) || [];
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('todoList', JSON.stringify(updatedTasks));
};

export default deleteTask;