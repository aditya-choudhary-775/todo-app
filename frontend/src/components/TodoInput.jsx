import React, { useContext, useRef } from "react";
import addIcon from "../assets/add-icon.png";
import { TodoContext } from "../context/todoContext";

const TodoInput = () => {
  const { addTask } = useContext(TodoContext);
  const todoInput = useRef(null);

  const handleAddTask = () => {
    addTask(todoInput.current.value);
    todoInput.current.value = "";
  };

  return (
    <>
      <div className="flex-none w-full px-2 sm:px-5 lg:px-6 pb-3 lg:pb-4">
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-3">
          <input
            type="text"
            className="tektur w-full border-gray-300 focus:outline-none focus:border-gray-500 bg-gray-100 px-3 py-2 sm:px-3 sm:py-3 lg:px-3 lg:py-2 rounded-3xl border text-sm sm:text-base lg:text-base"
            placeholder="What's the mission, boss?"
            ref={todoInput}
            onKeyDown={(e) => {
              if(e.key === "Enter") {
                e.preventDefault();
                handleAddTask();
              }
            }}
          />
          <button
            className="shrink-0 cursor-pointer hover:scale-125 transition-all duration-200"
            onClick={handleAddTask}
          >
            <img
              className="bg-gray-100 rounded-full h-9 w-9 sm:h-11 sm:w-11 lg:h-11 lg:w-11"
              src={addIcon}
              alt="Add"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoInput;