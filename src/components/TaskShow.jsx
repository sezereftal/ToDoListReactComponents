import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, deleteBtnClick, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteBtn = () => {
    console.log(task.id);
    deleteBtnClick(task.id);
  };

  const handleEditBtn = () => {
    setShowEdit(!showEdit);
  };

  const handleEditSubmit = (id, updatedTitle, updatedAddTask) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedAddTask);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate
          task={task}
          taskFormUpdate={true}
          onUpdate={handleEditSubmit}
        />
      ) : (
        <div>
          <div>
            <h3>Mission</h3>
            <p>{task.title}</p>
          </div>
          <div>
            <h3>To Do</h3>
            <p>{task.addTask}</p>
          </div>

          <div>
            <div className="create-btn-group">
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                color="error"
                onClick={handleDeleteBtn}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                color="info"
                onClick={handleEditBtn}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
