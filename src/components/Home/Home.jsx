import React, { useState } from "react";
import TodoItem from "./Item/TodoItem";
import { nanoid } from 'nanoid'
import CreateTodoField from "./CreateTodoField/CreateTodoField";

// const data = ;

const Home = () => {
	const [todos, setTodos] = useState(
    [
      // {
      //   id: nanoid(),
      //   tittle: "Первая тестовая задача",
      //   isCompleted: false,
      // },
      // {
      //   id: nanoid(),
      //   tittle: "Вторая тестовая задача",
      //   isCompleted: false,
      // },
    ]
  )
  

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t.id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  return (
    <div className="text-white w-4/5 mx-auto flex flex-col justify-center items-center">
      <h1 className=" text-6xl font-bold text-center mb-14 animate-bounce">To-do list</h1>
      <CreateTodoField setTodos={setTodos}/>
      {todos.map((todo) => (
        <TodoItem key={todo.id} 
        todo={todo} 
        changeTodo={changeTodo} 
        removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
