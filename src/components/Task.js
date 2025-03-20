import checkTask from "../lib/checkTask";
import getTasks from "../lib/getTasks";
import deleteTask from "../lib/deleteTask";
import { capitalizeFirstLetter } from "../lib/function";

const Task = (taskId, taskText, taskStatus) => {
    
    const taskSection = document.querySelector('.task-section');
    
    const task = document.createElement('article');
    task.classList.add('task');
    taskSection.appendChild(task);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    task.appendChild(titleDiv);
    

    const taskTitle = document.createElement('h3');
    taskTitle.textContent = capitalizeFirstLetter(taskText);
    titleDiv.appendChild(taskTitle);

    const controlDiv = document.createElement('div');
    controlDiv.classList.add('controlDiv');
    task.appendChild(controlDiv);

    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    controlDiv.appendChild(taskCheck);
    if (taskStatus === 'done') {
        taskCheck.checked = true;
        const taskDelete = document.createElement('button');
        taskDelete.classList.add('delete-task');
        
        controlDiv.appendChild(taskDelete); 
        taskTitle.style.textDecoration = 'line-through';
        setTimeout(() => {
            taskDelete.style.width = '150px';
            taskDelete.style.color = 'white';
            taskDelete.style.padding = '5px 10px';
        }, 300)
        setTimeout(()=> {
            taskDelete.textContent = 'Supprimer';
        }, 500)
    }

    taskCheck.addEventListener('change', () => {
        checkTask(taskId);
        if (taskCheck.checked === true) {
            const taskDelete = document.createElement('button');
            taskDelete.classList.add('delete-task');
          
            controlDiv.appendChild(taskDelete);
            setTimeout(() => {
                
                taskDelete.style.width = '150px';
                taskDelete.style.color = 'white';
                taskDelete.style.padding = '5px 10px';
            }, 300)
            setTimeout(()=> {
                taskDelete.textContent = 'Supprimer';
            }, 500)
            taskTitle.style.textDecoration = 'line-through';
            taskDelete.addEventListener('click', () => {
                deleteTask(taskId);
                task.remove();
            })
        } else {
            const taskDelete = controlDiv.querySelector('.delete-task');
            if (taskDelete) {
                taskDelete.remove();
                taskTitle.style.textDecoration = 'none';
            }
        }
    });

    
    
}

export default Task;