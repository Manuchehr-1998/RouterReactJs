import React, { useState } from "react";

export default function ToDoForm({ handleAddCardUser, handleSaveClick }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveClick(text);
    setText("");
  };
  const handleIputChage = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex gap-x-2">
        <input
          type="text"
          placeholder="Введите значения"
          value={text}
          onChange={handleIputChage}
          className="bg-blue-500 text-white "
        />
        <button
          type="submit"
          onClick={() => handleAddCardUser(text)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}
