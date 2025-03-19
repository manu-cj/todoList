import Task from './../components/Task.js';

const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('todoList')) || [];
    const main = document.querySelector('main');
    const taskSection = document.createElement('section');
    taskSection.classList.add('task-section');
    main.appendChild(taskSection);
    
    tasks.forEach(task => {
        Task(task.name);
    });
}

export default getTasks;