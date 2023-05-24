import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import "./Todo.css";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(null);
  // open edit
  const handleEditClick = (id) => {
    setEditingId(id);
    setIsEdit(true);
  };

  // add card
  const handleAddCardUser = (userInput) => {
    if (userInput) {
      const newCardUser = {
        id: crypto.randomUUID(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newCardUser]);
    }
  };
  // useEffect localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // logic edit
  const handleSaveClick = (editedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editingId) {
        return { ...todo, task: editedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setIsEdit(false);
    setEditingId(null);
  };
  // delete Zadacha
  const deleteText = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // complete button
  console.log(todos.complete);
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  // return map
  return (
    <div>
      <h1 className="text-center pt-2 pb-2">Список задач{todos.length}</h1>
      <ToDoForm
        handleAddCardUser={handleAddCardUser}
        handleSaveClick={handleSaveClick}
      />
      {todos.map((todo) => (
        <div key={todo.id} className="item-todo">
          <div className={todo.complete ? "item-text strike" : "item-text"}>
            {isEdit && editingId === todo.id ? (
              <form
                onSubmit={() => handleSaveClick(todo.task)}
                className="flex gap-x-2 "
              >
                <input
                  className="bg-blue-500 text-white p-1 "
                  type="text"
                  value={todo.task}
                  onChange={(e) =>
                    setTodos(
                      todos.map((item) =>
                        item.id === todo.id
                          ? { ...item, task: e.target.value }
                          : item
                      )
                    )
                  }
                />
                <button type="submit">Save Edit</button>
              </form>
            ) : (
              todo.task
            )}
          </div>
          <div className="pt-2 pb-2 flex justify-center text-white font-bold">
            {!isEdit && (
              <div className="w-[50%] bg-blue-500 rounded flex p-4 justify-center gap-x-8">
                <div className="py-2">
                  <h1 className="text-blue-200 hover:text-white">
                    {todo.task}
                  </h1>
                </div>
                <div className="flex gap-4 ">
                  <button
                    onClick={() => handleEditClick(todo.id)}
                    className="bg-blue-500 hover:bg-blue-700 hover:text-white text-blue-200 font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 hover:text-white text-blue-200 font-bold py-2 px-4 rounded"
                    onClick={() => deleteText(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleToggle(todo.id)}
                    className="bg-blue-500 hover:bg-blue-700 hover:text-white text-blue-200 font-bold py-2 px-4 rounded"
                  >
                    Complete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
