// DOM elements
var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
var clearAllBtn = document.getElementById("clearAllBtn");
// Load tasks from localStorage
var tasks = loadTasks();
// ===== Load tasks =====
function loadTasks() {
    var data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
}
// ===== Save tasks =====
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// ===== Render tasks =====
function renderTasks() {
    if (!taskList)
        return;
    taskList.innerHTML = "";
    var _loop_1 = function (i) {
        var task = tasks[i];
        var li = document.createElement("li");
        li.className = "task-item";
        var leftDiv = document.createElement("div");
        leftDiv.className = "task-left";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () { return toggleTask(task.id); });
        var span = document.createElement("span");
        span.textContent = task.title;
        if (task.completed)
            span.classList.add("completed");
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);
        // Edit button
        var editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", function () { return editTask(task.id); });
        // Delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function () { return deleteTask(task.id); });
        li.appendChild(leftDiv);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    };
    for (var i = 0; i < tasks.length; i++) {
        _loop_1(i);
    }
}
// ===== Add new task =====
addTaskBtn.addEventListener("click", function () {
    if (!taskInput)
        return;
    var title = taskInput.value.trim();
    if (!title)
        return;
    var newTask = {
        id: Date.now(),
        title: title,
        completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
});
// ===== Toggle completed =====
function toggleTask(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }
    saveTasks();
    renderTasks();
}
// ===== Delete task =====
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    saveTasks();
    renderTasks();
}
// ===== Edit task =====
function editTask(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            var newTitle = prompt("Edit task", tasks[i].title);
            if (newTitle !== null && newTitle.trim() !== "") {
                tasks[i].title = newTitle.trim();
            }
            break;
        }
    }
    saveTasks();
    renderTasks();
}
// ===== Clear all tasks =====
clearAllBtn.addEventListener("click", function () {
    tasks = [];
    localStorage.removeItem("tasks");
    renderTasks();
});
// ===== Initial render =====
renderTasks();
