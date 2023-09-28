import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TaskShow({ task, deleteBtnClick }) {
  const handleDeleteBtn = () => {
    console.log(task.id);
    deleteBtnClick(task.id);
  };
  return (
    <div className="task-show">
      <div>
        <h3>Mission</h3>
        <p>{task.title}</p>
      </div>
      <div>
        <h3>To Do</h3>
        <p>{task.addTask}</p>
      </div>
      <div className="create-btn-group">
        <Button
          variant="contained"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={handleDeleteBtn}
        >
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
