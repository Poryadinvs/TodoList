import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

export default function Form({ editTodo, setEditTodo, onChange, allTodos }) {
  const [value, setValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [handler, setHandler] = useState(null);

  useEffect(() => {
    editTodo ? setValue(editTodo.title) : setValue("");
  }, [editTodo]);

  const openModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  async function addTodo(e) {
    e.preventDefault();

    if (value) {
      let newTodo = { title: value };

      await axios
        .post("http://localhost:8000/todo", newTodo)
        .then(() => setValue(""))
        .catch((error) => console.error(error));

      onChange();
      return;
    }
    alert("Напишите текст задачи");
  }

  async function handleEditTodo(e) {
    e.preventDefault();

    await axios
      .put("http://localhost:8000/todo/" + editTodo.id, {
        title: value,
        completed: editTodo.completed,
      })
      .then(() => onChange())
      .catch((error) => console.error(error));

    setEditTodo(null);
  }

  function selectHandler(e) {
    openModal(
      `Вы уверены, что хотите ${
        e.target.value === "delete_all" ? "удалить" : "завершить"
      } все задачи?`
    );
    setHandler(e.target.value);
  }
  const onChangeHandler = () => {
    axios
      .post(`http://localhost:8000/todo/${handler}/`)
      .then(() => {
        onChange();
        closeModal();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      {isModalOpen && (
        <Modal
          title={modalTitle}
          onConfirm={onChangeHandler}
          closeModal={closeModal}
        />
      )}
      <form
        className="form"
        onSubmit={(e) => (editTodo ? handleEditTodo(e) : addTodo(e))}
      >
        <input
          type="text"
          placeholder="Нажмите Enter для добавления задачи"
          value={value}
          onInput={(e) => setValue(e.target.value)}
        />
      </form>
      {allTodos.length ? (
        <select name="" id="" onChange={(e) => selectHandler(e)}>
          <option value="">----</option>
          {allTodos.length ? (
            <option value="delete_all">Удалить все</option>
          ) : null}
          {allTodos.length && allTodos.find((todo) => !todo.completed) ? (
            <option value="complete_all">Завершить все</option>
          ) : null}
        </select>
      ) : null}
    </div>
  );
}
