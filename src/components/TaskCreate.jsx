import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useContext } from "react";
import TaskContext from "../context/task-context";

function TaskCreate({ taskFormUpdate, task, onUpdate }) {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [addTask, setAddTask] = useState(task ? task.addTask : "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTaskChange = (e) => {
    setAddTask(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, addTask);
    } else {
      createTask(title, addTask);
    }
    setTitle("");
    setAddTask("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="edit-task-main-div">
          <h1 className="task-form">Please Edit Task</h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "280px" },
            }}
          >
            <TextField
              id="outlined-basic"
              label="Edit Title"
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              id="outlined-basic"
              label="Edit To Do"
              variant="outlined"
              value={addTask}
              onChange={handleAddTaskChange}
            />
          </Box>
          <Button
            variant="contained"
            color="success"
            endIcon={<EditIcon />}
            onClick={handleOnSubmit}
          >
            Edit
          </Button>
        </div>
      ) : (
        <div className="add-task-main-div">
          <h1 className="task-form">Please Add Task</h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "380px" },
            }}
          >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              id="outlined-basic"
              label="To Do"
              variant="outlined"
              value={addTask}
              onChange={handleAddTaskChange}
            />
          </Box>
          <Button
            variant="contained"
            color="success"
            endIcon={<SendIcon />}
            onClick={handleOnSubmit}
          >
            Create
          </Button>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
