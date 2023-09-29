import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TaskContext from "../context/task-context";

function TaskShow({ task }) {
  const { handleOnDelete, editTaskById } = useContext(TaskContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteBtn = () => {
    handleOnDelete(task.id);
  };

  const handleEditBtn = () => {
    setShowEdit(!showEdit);
  };

  const handleEditSubmit = (id, updatedTitle, updatedAddTask) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedAddTask);
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
