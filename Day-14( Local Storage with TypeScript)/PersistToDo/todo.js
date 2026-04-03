var inputs = document.getElementById("todoInput");
var addBtn = document.getElementById("addBtn");
var list = document.getElementById("todoList");
var clearBtn = document.getElementById("clearBtn");
var loadTodos = function () {
    var data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
};
var saveTodos = function (todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
};
var todos = loadTodos();
var renderTodos = function () {
    list.innerHTML = "";
    todos.forEach(function (todo, index) {
        var li = document.createElement("li");
        li.textContent = todo.text;
        li.className = todo.completed ? "completed" : "";
        li.addEventListener("click", function () {
            todo.completed = !todo.completed;
            saveTodos(todos);
            renderTodos();
        });
        // Delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", function (e) {
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
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!inputs.value.trim())
        return;
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
clearBtn.addEventListener("click", function () {
    todos = [];
    localStorage.removeItem("todos");
    renderTodos();
});
// Initial render
renderTodos();
