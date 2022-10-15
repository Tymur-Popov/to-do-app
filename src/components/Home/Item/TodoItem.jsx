import React from "react";
import Checkbox from "./Checkbox";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className="flex items-center justify-between mb-10 rounded-2xl bg-zinc-800 p-5 w-full hover:-translate-y-1 ease-in-out duration-300 cursor-pointer"
    >
      <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Checkbox isCompleted={todo.isCompleted}/>
      </button>
      <span className={` text-lg ${todo.isCompleted ? "line-through" : ""}`} onClick={() => changeTodo(todo.id)}>
          {todo.tittle}
        </span>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash
          className="text-gray-500 hover:text-red-600 transition-colors ease-in-out duration-300"
          size={24}
        />
      </button>
    </div>
  );
};
export default TodoItem;
