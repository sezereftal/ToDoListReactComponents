import { useEffect } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useContext } from "react";
import TaskContext from "./context/task-context";

function App() {
  const { fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <TaskList />
    </div>
  );
}

export default App;
