//define types using interface
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const inputs = document.getElementById("todoInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("todoList") as HTMLUListElement;
const clearBtn = document.getElementById("clearBtn") as HTMLButtonElement;

const loadTodos = (): Todo[] => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

let todos: Todo[] = loadTodos();

const renderTodos = (): void => {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.className = todo.completed ? "completed" : "";

    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      saveTodos(todos);
      renderTodos();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent marking complete when deleting
      todos.splice(index, 1);
      saveTodos(todos);
      renderTodos();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
};

// Add todo
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputs.value.trim()) return;

  todos.push({
    id: Date.now(),
    text: inputs.value,
    completed: false,
  });

  saveTodos(todos);
  renderTodos();
  inputs.value = "";
});

// Clear all todos
clearBtn.addEventListener("click", () => {
  todos = [];
  localStorage.removeItem("todos");
  renderTodos();
});

// Initial render
renderTodos();
