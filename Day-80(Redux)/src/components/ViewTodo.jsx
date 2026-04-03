import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  editTodo,
} from "../features/todos/todoSlice";
import { useState } from "react";
import "../style/todo.css";

function ViewTodo() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    if (!editText.trim()) return;
    dispatch(editTodo({ id, text: editText }));
    setEditId(null);
  };

  return (
    <div className="todo-container">
      <h3 className="todo-title">Your Tasks</h3>

      {todos.length === 0 ? (
        <p className="empty">No todos yet </p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li className="todo-item" key={todo.id}>
              {editId === todo.id ? (
                <input
                  className="todo-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <span
                  className={`todo-text ${todo.completed ? "completed" : ""}`}
                  onClick={() => dispatch(toggleComplete(todo.id))}
                >
                  {todo.text}
                </span>
              )}

              <div className="btn-group">
                {editId === todo.id ? (
                  <button
                    className="save-btn"
                    onClick={() => handleSave(todo.id)}
                  >
                    💾 Save
                  </button>
                ) : (
                  <button className="edit-btn" onClick={() => handleEdit(todo)}>
                    ✏️ Edit
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewTodo;
