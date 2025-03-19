import AddTask from "./AddTask";

const Menu = (header) => {
  const container = document.createElement("div");

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Ajouter une tâche";
  addTaskButton.classList.add("add-task");
  container.appendChild(addTaskButton);

  const darkModeButton = document.createElement("button");
  darkModeButton.textContent = "Dark Mode";
  darkModeButton.classList.add("dark-mode");
  container.appendChild(darkModeButton);

  header.appendChild(container);

  addTaskButton.addEventListener("click", () => {
    AddTask();
  });
};

export default Menu;
