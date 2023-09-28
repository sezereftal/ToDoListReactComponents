import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TaskShow({ task }) {
  return (
    <div className="task-show">
      <div>
        <h4>Mission</h4>
        <p>{task.title}</p>
      </div>
      <div>
        <h4>To Do</h4>
        <p>{task.addTask}</p>
      </div>
      <div className="create-btn-group">
        <Button variant="contained" startIcon={<DeleteIcon />} color="error">
          Delete
        </Button>
        <Button variant="contained" startIcon={<EditIcon />} color="info">
          Edit
        </Button>
      </div>
    </div>
  );
}

export default TaskShow;
