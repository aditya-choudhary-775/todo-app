import React, { useContext, useEffect, useRef, useState } from "react";
import checkedBox from "../assets/checked-box.png";
import uncheckedBox from "../assets/unchecked-box.png";
import cross from "../assets/cross.png";
import trash from "../assets/trash.png";
import { TodoContext } from "../context/todoContext";

const Task = ({ task }) => {
  const { toggleComplete, deleteTask, updateTask } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const todoTask = useRef(null);

  const save = () => {
    const newText = todoTask.current.textContent.trim();
    if (!newText) {
      todoTask.current.textContent = task.text;
    } else {
      updateTask(task.id, newText);
    }
    setIsEditing(false);
  };

  const handleDoubleClick = (e) => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing && todoTask.current) {
      todoTask.current.focus();
    }
  }, [isEditing]);

  return (
    <>
      <div className="border rounded-2xl px-2 py-2 mx-1 my-1 lg:mx-1 lg:my-1 sm:px-2 sm:py-2 lg:px-2 lg:py-2 bg-white rubik-doodle-shadow text-black flex items-center gap-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="shrink-0 cursor-pointer hover:scale-125 ease-in-out duration-200"
        >
          <img
            className="h-7 w-7 sm:h-8 sm:w-8 lg:h-8 lg:w-8"
            src={task.completed ? checkedBox : uncheckedBox}
            alt="checked-box"
          />
        </button>
        <p
          ref={todoTask}
          contentEditable={isEditing}
          suppressContentEditableWarning
          className={`flex-1 min-w-0 text-sm sm:text-base lg:text-base focus:outline-none leading-snug text-shadow-lg ${
            task.completed ? "line-through opacity-60" : ""
          }`}
          onDoubleClick={handleDoubleClick}
          onBlur={save}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.currentTarget.blur();
            } else if (e.key === "Escape") {
              e.currentTarget.textContent = task.text;
              e.currentTarget.blur();
            }
          }}
        >
          {task.text}
        </p>
        <button
          onClick={() => deleteTask(task.id)}
          className="shrink-0 cursor-pointer hover:scale-125 ease-in-out duration-200"
        >
          <img
            className="h-7 w-7 sm:h-8 sm:w-8 lg:h-8 lg:w-8"
            src={trash}
            alt=""
          />
        </button>
      </div>

      {/* <div className="border rounded-2xl px-2 py-2 mx-1 my-1 lg:mx-2 lg:my-2 sm:px-3 sm:py-3 lg:px-5 lg:py-4 bg-white rubik-doodle-shadow text-black flex items-center gap-2 sm:gap-3 lg:gap-5">
        <button
          onClick={() => toggleComplete(task.id)}
          className="shrink-0 cursor-pointer hover:scale-110 ease-in-out duration-200"
        >
          <img
            className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
            src={task.completed ? checkedBox : uncheckedBox}
            alt="checked-box"
          />
        </button>
        <p
          ref={todoTask}
          contentEditable={isEditing}
          suppressContentEditableWarning
          className={`flex-1 min-w-0 text-sm sm:text-base lg:text-lg focus:outline-none leading-snug text-shadow-lg ${
            task.completed ? "line-through opacity-60" : ""
          }`}
          onDoubleClick={handleDoubleClick}
          onBlur={save}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.currentTarget.blur();
            } else if (e.key === "Escape") {
              e.currentTarget.textContent = task.text;
              e.currentTarget.blur();
            }
          }}
        >
          {task.text}
        </p>
        <button
          onClick={() => deleteTask(task.id)}
          className="shrink-0 cursor-pointer hover:scale-110 ease-in-out duration-200"
        >
          <img
            className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
            src={trash}
            alt=""
          />
        </button>
      </div> */}
    </>
  );
};

export default Task;
