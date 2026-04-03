import { useState } from "react";
import { addTodo } from "../features/todos/todoSlice";
import { useDispatch } from "react-redux";
import "../style/todo.css";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title"> My Todo App</h2>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Enter your task..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <button className="todo-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
