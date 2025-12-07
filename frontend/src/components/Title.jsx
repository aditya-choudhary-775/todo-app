import React, { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const Title = () => {
  const { getTaskCount } = useContext(TodoContext);
  const [incompleteTasks, completedTasks] = getTaskCount();

  return (
    <div className="flex-none w-full px-2 sm:px-3 lg:px-5 pt-3 sm:pt-4 lg:pt-5 pb-2 mb-2">
      <div
        className="
          grid
          grid-cols-2 sm:grid-cols-3
          gap-2 sm:gap-3 lg:gap-5
          items-stretch
        "
      >
        {/* Logo Card */}
        <div
          className="
            order-1 sm:order-2
            col-span-2 sm:col-span-1
            bg-gray-100 px-2 py-2 sm:px-3 sm:py-3 lg:px-6 lg:py-4
            rounded-2xl border
            flex justify-center items-center
          "
        >
          <div className="flex items-center gap-3">
            <h1 className="great-vibes text-2xl sm:text-4xl lg:text-4xl">
              Your
            </h1>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl tilt-prism">
              Todo
            </h1>
          </div>
        </div>

        {/* Incomplete Tasks Card */}
        <div
          className="
            order-2 sm:order-1
            col-span-1
            border bg-gray-100 px-2 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4
            rounded-2xl flex flex-col items-center
          "
        >
          <span className="text-2xl sm:text-4xl lg:text-5xl text-center font-medium architects-daughter">
            {incompleteTasks}
          </span>
          <p className="text-[11px] sm:text-xs lg:text-sm text-center leading-tight patrick-hand">
            Tasks Remaining
          </p>
        </div>

        {/* Completed Tasks Card */}
        <div
          className="
            order-3 sm:order-3
            col-span-1
            border bg-gray-100 px-2 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4
            rounded-2xl flex flex-col items-center
          "
        >
          <span className="text-2xl sm:text-4xl lg:text-5xl text-center font-medium architects-daughter">
            {completedTasks}
          </span>
          <p className="text-[11px] sm:text-xs lg:text-sm text-center leading-tight patrick-hand">
            Tasks Completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;