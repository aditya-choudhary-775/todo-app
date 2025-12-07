import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todoContext";
import Task from "./Task";

const TodoList = () => {
  const { todoList, getEmptyTasksDisplay } = useContext(TodoContext);
  const [portal, setPortal] = useState(null);
  const [portalText, setPortalText] = useState(null);

  useEffect(() => {
    if (todoList.length) {
      setPortal(null);
      setPortalText(null);
    } else {
      const tempObj = getEmptyTasksDisplay();
      setPortal(tempObj.portal);
      setPortalText(tempObj.portalText);
    }
  }, [todoList]);

  return (
    <>
      <div
        className={`flex-1 ${todoList.length ? "bg-gray-100" : "bg-gray-200"} border mx-2 sm:mx-2 lg:mx-3 mb-3 sm:mb-5 lg:mb-6 px-1 py-1 sm:px-2 sm:py-2 lg:px-2 lg:py-2 rounded-3xl overflow-y-auto no-scrollbar w-11/12`}
      >
        {todoList.length ? (
          todoList.map((task) => <Task key={task.id} task={task} />)
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full gap-2">
            <img className="h-3/5" src={portal} alt="" />
            <p className="text-center cinzel p-2">{portalText}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoList;
