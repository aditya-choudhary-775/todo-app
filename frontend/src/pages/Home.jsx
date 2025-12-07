import React from "react";
import Title from "../components/Title";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center border rounded-3xl shadow-2xl max-h-screen m-2 w-full max-w-xl lg:max-w-3xl h-[88vh] sm:h-[80vh] lg:h-[88vh] overflow-hidden">
          <Title />
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default Home;
