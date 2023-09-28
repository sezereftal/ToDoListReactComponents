import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, addTask) => {
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        addTask,
      },
    ];
    setTasks(createdTask);
  };

  const handleOnDelete = (id) => {
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTask);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <TaskList tasks={tasks} deleteBtnClick={handleOnDelete} />
    </div>
  );
}

export default App;
