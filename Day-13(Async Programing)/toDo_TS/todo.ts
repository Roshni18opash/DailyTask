// Task interface
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// DOM elements
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

// Task array
let tasks: Task[] = loadTasks();

// Event
addTaskBtn.addEventListener("click", addTask);

// Add task
function addTask(): void {
  const title = taskInput.value.trim();

  if (title === "") {
    alert("Task cannot be empty");
    return;
  }

  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

// Render tasks (FIXED ALIGNMENT)
function renderTasks(): void {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item";

    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleTask(task.id);

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) {
      span.classList.add("completed");
    }

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Toggle task status
function toggleTask(id: number): void {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(id: number): void {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// Local storage
function saveTasks(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
}

// Initial render
renderTasks();
