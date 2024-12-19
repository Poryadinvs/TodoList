import React from "react";
import Todo from "./Todo";
import axios from "axios";

export default function Todos({
  todos,
  setTodos,
  setEditTodo,
  todosArray,
  onChange,
}) {
  function filterTodos(e) {
    let status = e.target.textContent;

    const statuses = {
      Все: "all",
      Завершенные: "completed",
      Открытые: "open",
    };
    axios
      .get("http://localhost:8000/todo", {
        params: {
          type: statuses[status],
        },
      })
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="todos-container">
      {todos.length ? (
        <div className="filter-buttons">
          <button onClick={(e) => filterTodos(e)}>Все</button>
          <button onClick={(e) => filterTodos(e)}>Завершенные</button>
          <button onClick={(e) => filterTodos(e)}>Открытые</button>
        </div>
      ) : null}
      <div className="todos">
        {todos &&
          todos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              todo={todo}
              setEditTodo={setEditTodo}
              onChange={onChange}
            />
          ))}
      </div>
    </div>
  );
}
