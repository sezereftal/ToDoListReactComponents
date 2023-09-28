import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [addTask, setAddTask] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTaskChange = (e) => {
    setAddTask(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setAddTask("");
    onCreate(title, addTask);
  };

  return (
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
  );
}

export default TaskCreate;
