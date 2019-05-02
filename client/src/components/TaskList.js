import React from "react";
import Task from "./Task";

const TaskList = ({ taskList, loading, handleEditTask }) => {
  return (
    <div className="jumbotron">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        taskList.map(task => (
          <Task
            handleEditTask={handleEditTask}
            key={task.id}
            task={task.task}
            status={task.status}
            email={ task.email }
            id={task.id}
          />
        ))
      )}
    </div>
  );
};
export default TaskList;
