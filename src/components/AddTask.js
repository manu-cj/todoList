import getTasks from "../lib/getTasks";
import Task from "./Task";

const AddTask = () => {
    const app = document.querySelector('#app');

    const modal = document.createElement('div');
    modal.classList.add('modal');
    app.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const form = document.createElement('form');
    modalContent.appendChild(form);

    const titleForm = document.createElement('h2');
    titleForm.textContent = 'Ajouter une tâche';
    form.appendChild(titleForm);

    const label = document.createElement('label');
    label.setAttribute('for', 'task');
    label.textContent = 'Nom de la tâche :';
    form.appendChild(label);    

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'task');
    input.setAttribute('name', 'task');
    form.appendChild(input);

    const controlDiv = document.createElement('div');
    controlDiv.classList.add('control');
    modalContent.appendChild(controlDiv);
   

    const closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.textContent = 'Fermer';
    controlDiv.appendChild(closeButton);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.classList.add('submit-task');
    submit.textContent = 'Ajouter';
    controlDiv.appendChild(submit);

    

    
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const taskValue = document.querySelector('#task').value;
        if (taskValue) {
            console.log(taskValue);
            const tasks = JSON.parse(localStorage.getItem('todoList')) || [];
            const newTask = {
                id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                name: taskValue,
                status: 'todo',
            };
            tasks.push(newTask);
            localStorage.setItem('todoList', JSON.stringify(tasks));
            modal.remove();
            Task(taskValue);
        }
    }
    );

    closeButton.addEventListener('click', () => {
        modal.remove();
    });

    
}
export default AddTask;