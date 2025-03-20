import AddTask from "./AddTask";

const Menu = (header) => {
  const container = document.createElement("div");

  const filter = document.createElement("select");
  filter.classList.add("filter");
  container.appendChild(filter);
  const optionAll = document.createElement("option");
  optionAll.textContent = "All";
  optionAll.value = "all";
  filter.appendChild(optionAll);
  const optionTodo = document.createElement("option");
  optionTodo.textContent = "Todo";
  optionTodo.value = "todo";
  const done = document.createElement("option");
  done.textContent = "Done";
  done.value = "done";
  filter.appendChild(optionTodo);
  filter.appendChild(done);

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "add task";
  addTaskButton.classList.add("add-task");
  container.appendChild(addTaskButton);

  const darkModeButton = document.createElement("i");
darkModeButton.classList.add("dark-mode", "fa-solid", "fa-toggle-off");
darkModeButton.style.fontSize = "24px";

  container.appendChild(darkModeButton);

  header.appendChild(container);

  addTaskButton.addEventListener("click", () => {
    AddTask();
  });
};

export default Menu;
