interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;
const clearAllBtn = document.getElementById("clearAllBtn") as HTMLButtonElement;

// Load tasks from LS
let tasks: Task[] = loadTasks();

//task loaded here
function loadTasks(): Task[] {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
}

// task save here
function saveTasks(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// rendering task here
function renderTasks(): void {
  if (!taskList) return;

  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const li = document.createElement("li");
    li.className = "task-item";

    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) span.classList.add("completed");

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    // for edit task
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => editTask(task.id));

    // for delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(leftDiv);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  }
}

// for add new task
addTaskBtn.addEventListener("click", () => {
  if (!taskInput) return;
  const title = taskInput.value.trim();
  if (!title) return;

  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
});

// toggling task
function toggleTask(id: number): void {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].completed = !tasks[i].completed;
      break;
    }
  }
  saveTasks();
  renderTasks();
}

// for delete
function deleteTask(id: number): void {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// for edit
function editTask(id: number): void {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      const newTitle = prompt("Edit task", tasks[i].title);
      if (newTitle !== null && newTitle.trim() !== "") {
        tasks[i].title = newTitle.trim();
      }
      break;
    }
  }
  saveTasks();
  renderTasks();
}

// remove all task
clearAllBtn.addEventListener("click", () => {
  tasks = [];
  localStorage.removeItem("tasks");
  renderTasks();
});
//rendering in intial
renderTasks();
