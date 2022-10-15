import React from "react";
import { BsCheck } from "react-icons/bs";

const Checkbox = ({ isCompleted }) => {
  return (
    <div className={`border-2 rounded-lg border-pink-400 w-6 h-6 mr-4 flex items-center justify-center ${isCompleted ? 'bg-pink-400' : ''}`}>
        {isCompleted && 
        <BsCheck size={24} className='text-gray-900' />
        }
    </div>
  );
};

export default Checkbox;
