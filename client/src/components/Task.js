import React from "react";

const Task = ({ id, task, email, status, handleEditTask }) => {
  return (
    <div
      className="card mb-3"
      onClick={e => handleEditTask({ id, task, status })}
    >
      <div className="card-body">
        <div className="card-header">{email}</div>
        <div className="card-body">{task}</div>
        <div className="card-footer">Status: {status}</div>
      </div>
    </div>
  );
};

export default Task;
