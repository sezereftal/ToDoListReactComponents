import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, addTask) => {
    const response = await axios.post(`http://localhost:3000/tasks`, {
      title,
      addTask,
    });
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };

  const fetchTasks = async () => {
    const response = await axios.get(`http://localhost:3000/tasks`);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleOnDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTask);
  };

  const editTaskById = async (id, updatedTitle, updatedAddTask) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      addTask: updatedAddTask,
    });
    const updatedTask = tasks.map((task) => {
      if (task.id == id) {
        return { id, title: updatedTitle, addTask: updatedAddTask };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <TaskList
        tasks={tasks}
        deleteBtnClick={handleOnDelete}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
