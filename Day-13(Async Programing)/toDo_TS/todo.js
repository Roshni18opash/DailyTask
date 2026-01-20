var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// DOM elements
var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
// Task array
var tasks = loadTasks();
// Event
addTaskBtn.addEventListener("click", addTask);
// Add task
function addTask() {
    var title = taskInput.value.trim();
    if (title === "") {
        alert("Task cannot be empty");
        return;
    }
    var newTask = {
        id: Date.now(),
        title: title,
        completed: false
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
}
// Render tasks (FIXED ALIGNMENT)
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        var li = document.createElement("li");
        li.className = "task-item";
        var leftDiv = document.createElement("div");
        leftDiv.className = "task-left";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = function () { return toggleTask(task.id); };
        var span = document.createElement("span");
        span.textContent = task.title;
        if (task.completed) {
            span.classList.add("completed");
        }
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function () { return deleteTask(task.id); };
        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
// Toggle task status
function toggleTask(id) {
    tasks = tasks.map(function (task) {
        return task.id === id ? __assign(__assign({}, task), { completed: !task.completed }) : task;
    });
    saveTasks();
    renderTasks();
}
// Delete task
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    saveTasks();
    renderTasks();
}
// Local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    var data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
}
// Initial render
renderTasks();
