import Task from "../components/Task";
const filter = (filterSelect) => {
  console.log(filterSelect.value);

  let tasks = JSON.parse(localStorage.getItem("todoList")) || [];
  if (filterSelect.value !== "all") {
    tasks = tasks.filter((task) => task.status === filterSelect.value);
    console.log(tasks);

    tasks.forEach((task) => {
      Task(task.id, task.name, task.status);
    });
  } else {
    tasks.forEach((task) => {
      Task(task.id, task.name, task.status);
    });
  }
};
export default filter;
