import React from "react";

export default function Footer({ todos }) {
  return (
    <div className="footer">
      <span>
        Задач: &nbsp;
        {todos.length ? todos.length : 0}
      </span>
      <span>
        Открыты: &nbsp;
        {todos.length ? todos.filter((task) => !task.completed).length : 0}
      </span>
      <span>
        Завершены: &nbsp;
        {todos.length ? todos.filter((task) => task.completed).length : 0}
      </span>
    </div>
  );
}
