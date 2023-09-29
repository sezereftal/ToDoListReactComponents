import React from "react";
import TaskShow from "./TaskShow";

function TaskList({ tasks, deleteBtnClick, onUpdate }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return (
          <TaskShow
            key={index}
            task={task}
            deleteBtnClick={deleteBtnClick}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
