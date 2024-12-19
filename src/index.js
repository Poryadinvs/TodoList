import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./static/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);


// синтаксис fetch-запроса

// fetch(
// запрос на сервер
// преобразование json в объект js
// вывод информации
// обработка ошибок
// )

// стандартный get-запрос

// let request = fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");

// request
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// get-запрос с конкретным id
// let request = fetch("https://jsonplaceholder.typicode.com/todos/1");

// request
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// post-запрос
// let request = fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "New todo",
//     completed: false,
//     userId: 1,
//   }),
// });

// request
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

