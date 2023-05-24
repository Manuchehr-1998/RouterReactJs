import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CardUser from "../CardUsers/CardUser";
import CardUsers from "../CardUsers/CardUsers";
import Home from "../Home/Home";
import ToDoList from "../ToDoList/ToDoList";

export default function Header() {
  const users = [
    {
      id: 1,
      img: "https://v1.tailwindcss.com/img/card-top.jpg",
      fulName: "Manucehr",
      job: "unemployed",
    },
    {
      id: 2,
      img: "https://www.w3schools.com/howto/img_avatar.png",

      fulName: "Manucehr",
      job: "unemployed",
    },
    {
      id: 3,
      img: "https://www.w3schools.com/howto/img_avatar2.png",
      fulName: "",
      job: "unemployed",
    },
  ];

  const [cardUsers, setCardUsers] = useState(users);
  const deleteCardUser = (id) => {
    setCardUsers(cardUsers.filter((user) => user.id !== id));
  };
  return (
    <div>
      <nav>
        <ul className="flex gap-x-8 justify-center pt-4">
          <Link to="/">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Home
            </button>
          </Link>
          <Link to="/Todolist">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              ToDoList
            </button>
          </Link>
          <Link to="/CardUsers">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              CardUsers
            </button>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Todolist" element={<ToDoList />} />
        <Route
          path="CardUsers"
          element={
            <CardUsers cardUsers={cardUsers} deleteCardUser={deleteCardUser} />
          }
        />
        <Route
          path="/CardUsers/:id"
          element={
            <CardUser cardUsers={cardUsers} deleteCardUser={deleteCardUser} />
          }
        />
      </Routes>
    </div>
  );
}
