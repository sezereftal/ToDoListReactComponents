import { useEffect } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useContext } from "react";
import TaskContext from "./context/task-context";
import Navbar from "./components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Cards from "./components/cardComponent/Cards";
import Comments from "./components/cardComponent/Comments";
import CommentsList from "./components/cardComponent/CommentsList";
import { useState } from "react";

function App() {
  const { fetchTasks } = useContext(TaskContext);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const onCreateComment = (value) => {
    const createdComment = [
      ...comment,
      { id: Math.round(Math.random() * 9999999), value },
    ];
    setComment(createdComment);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            item
            xs={2}
          >
            <Grid item xs={4}>
              <Cards />
            </Grid>
            <Grid sx={{ mt: 4 }} item xs={8}>
              <Comments createComment={onCreateComment} />
              <CommentsList comment={comment} />
            </Grid>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="App"
          >
            <TaskCreate />
            <TaskList />
          </Grid>
          <Grid item xs={2}>
            sezer
          </Grid>
        </Grid>
      </Box>

      {/* 
      <div className="App" >
        <TaskCreate />
        <TaskList />
      </div> */}
    </div>
  );
}

export default App;
