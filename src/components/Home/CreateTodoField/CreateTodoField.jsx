import React, { useState } from "react";
import { nanoid } from "nanoid";
import {IoIosAddCircleOutline} from 'react-icons/io'

const CreateTodoField = ({ setTodos}) => {
  const [tittle, setTittle] = useState("");

  const addTodo = tittle => {setTodos(prev => [{
    id: nanoid(),
    tittle,
    isCompleted: false,
  },
  ...prev,
])
setTittle('');
}

  return (
    <div className="mb-10 flex items-center justify-between rounded-2xl bg-zinc-800 px-5 py-3 w-full border-2 border-zinc-800">
      <input type="text" 
      placeholder="Add a task.."
      className=" bg-transparent w-full border-none outline-none "
      onChange={(e) => setTittle(e.target.value)} 
      value={tittle}
      onKeyPress={e => e.key === 'Enter' && addTodo(tittle)}
      />
      <IoIosAddCircleOutline
       size={28} className='text-gray-500 hover:text-pink-400 transition-colors ease-in-out duration-300'
       onClick={() => addTodo(tittle)}
       />
    </div>
  );
};

export default CreateTodoField;
