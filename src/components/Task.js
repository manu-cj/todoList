const Task = (taskText) => {
    
    const taskSection = document.querySelector('.task-section');
    
    const task = document.createElement('article');
    task.classList.add('task');
    taskSection.appendChild(task);
    

    const taskTitle = document.createElement('h3');
    taskTitle.textContent = taskText;
    task.appendChild(taskTitle);

    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    task.appendChild(taskCheck);
    
    const taskDelete = document.createElement('button');
    taskDelete.classList.add('delete-task');
    taskDelete.textContent = 'Supprimer';
    task.appendChild(taskDelete);
}

export default Task;