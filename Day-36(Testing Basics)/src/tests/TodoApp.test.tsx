import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "../components/TodoApp";

describe("TodoApp component", () => {
  //used to grp multiple test cases for a single component.
  //heading test
  test("render heading", () => {
    render(<TodoApp />);
    expect(screen.getByText("Todo App")).toBeInTheDocument(); // find Todo app text
  });
  //add test
  test("button click todo add", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Enter Todo...");
    const button = screen.getByText("Add");
    fireEvent.change(input, { target: { value: "Learn Basic Testing" } });
    fireEvent.click(button);
    expect(screen.getByText("Learn Basic Testing")).toBeInTheDocument();
  });
  test("not add empty todo", () => {
    render(<TodoApp />);
    const button = screen.getByText("Add");
    fireEvent.click(button);
    const todos = screen.queryAllByRole("listitem");
    expect(todos.length).toBe(0);
  });

  test("todo delete works", () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("Enter Todo...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Learn Testing" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(screen.queryAllByRole("listitem").length).toBe(0);
  });
});
