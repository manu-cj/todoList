import './assets/styles/global.css'
import Title from './components/Title';
import Menu from './components/Menu';
import getTasks from './lib/getTasks';

const app = document.querySelector('#app');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

app.appendChild(header);
app.appendChild(main); 
app.appendChild(footer);

Title(header, 'TodoList');
Menu(header);

getTasks();

