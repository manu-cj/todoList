import Task from './../components/Task.js';
import checkTask from './checkTask.js';
import filter from './filter.js';

const getTasks = () => {
    const main = document.querySelector('main');
    const taskSection = document.createElement('section');
    const filterSelect = document.querySelector('.filter');
    taskSection.classList.add('task-section');
    main.appendChild(taskSection);
    filterSelect.addEventListener('change', () => {
        taskSection.innerHTML = '';
        filter(filterSelect);
    });
    filter(filterSelect);
    

    


}

export default getTasks;