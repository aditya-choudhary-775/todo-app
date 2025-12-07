import { createContext, useEffect, useState } from "react";
import portal1 from "../assets/portal1.png";
import portal2 from "../assets/portal2.png";
import portal3 from "../assets/portal3.png";
import portal4 from "../assets/portal4.png";
import portal5 from "../assets/portal5.png";
import portal6 from "../assets/portal6.png";

export const TodoContext = createContext({
  todoList: [],
  toggleComplete: () => {},
  addTask: () => {},
  deleteTask: () => {},
  updateTask: () => {},
  getTaskCount: () => {},
  getEmptyTasksDisplay: () => {},
});

const TodoContextProvider = (props) => {
  const portals = [portal1, portal2, portal3, portal4, portal5, portal6];

  const portalText = [
    [
      "All gears stand still… waiting for your first move.",
      "The machine sleeps until you set it in motion.",
      "Turn the cogs. Start the timeline.",
    ],
    [
      "The vortex is open. Step into the unknown.",
      "Beyond this swirl lies a place shaped by your choices.",
      "Stand at the edge of the spiral. Begin your journey.",
    ],
    [
      "The runes awaken… step into the realm beyond.",
      "Through this ancient arch, destiny unfolds.",
      "Carved by time. Awakened by your step.",
    ],
    [
      "Where roots twist, a path awakens.",
      "Carved by time. Guarded by trees. Open for you.",
      "The forest parts… step into the quiet beyond.",
    ],
    [
      "The runes shine within the crystal. Walk through.",
      "Forged in ancient ice, this gateway waits for you.",
      "The crystals hum softly… step into the light.",
    ],
    [
      "Step into the spiral. Let the world reshape.",
      "Where the stone spirals, a path unwinds.",
      "The runes pull you inward. Begin the descent.",
    ],
  ];

  function getRandomIndex(arr) {
    if (!arr || arr.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
  }

  const getTodoListString = () => {
    let todoListString = localStorage.getItem("todo");
    return (todoListString ? JSON.parse(todoListString) : []);
  };

  const [todoList, setTodoList] = useState(getTodoListString());

  const toggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (text) => {
    setTodoList((prev) => {
      const maxId =
        prev.length > 0 ? Math.max(...prev.map((task) => task.id)) : 0;
      const newTask = {
        id: maxId + 1,
        text,
        completed: false,
        createdAt: new Date(),
      };
      return [newTask, ...prev];
    });
  };

  const deleteTask = (id) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (id, text) => {
    setTodoList((prev) => prev.map((task) => (task.id === id ? { ...task, text } : task)));
  };

  const getTaskCount = () => {
    let completedTasks = 0,
      incompleteTasks = 0;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].completed) {
        completedTasks++;
      } else {
        incompleteTasks++;
      }
    }
    return [incompleteTasks, completedTasks];
  };

  const getEmptyTasksDisplay = () => {
    const randomIndex1 = getRandomIndex(portals);
    const randomIndex2 = getRandomIndex(portalText[randomIndex1]);

    return {
      portal: portals[randomIndex1],
      portalText: portalText[randomIndex1][randomIndex2],
    };
  };

  useEffect(() => {
    setTodoList(getTodoListString);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const value = {
    todoList,
    toggleComplete,
    addTask,
    deleteTask,
    updateTask,
    getTaskCount,
    getEmptyTasksDisplay,
  };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;