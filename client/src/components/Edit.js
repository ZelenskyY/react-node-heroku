import React, { useState } from "react";

const Task = ({ taskForEdit, handleUpdateTask, cancelEdit }) => {
  let { task, status, id } = taskForEdit;
  let inputTask;
  const [propTask, setPropTask] = useState(task);
  let inputStatus;
  const [propStatus, setPropStatus] = useState(status);
  let inputCheckbox;

  return (
    <div className="card mb-3">
      <form className="card-body">
        <div className="form-row">
          <div className="col-11 mb-3">
            <label>Task</label>
            <textarea
              ref={node => (inputTask = node)}
              onChange={e => setPropTask(() => inputTask.value)}
              rows="3"
              type="text"
              className="form-control"
              //! Task
              value={propTask}
            />
          </div>
          <div className="col-1 mb-3">
            <label>Score</label>
            <select
              ref={node => (inputStatus = node)}
              onChange={e => setPropStatus(() => inputStatus.value)}
              rows="1"
              className="form-control"
              //! Status
              value={propStatus}
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              // ! set status = input.checked ? 10 : 0
              ref={node => (inputCheckbox = node)}
              onChange={e => {
                inputCheckbox.checked
                  ? setPropStatus(() => 10)
                  : setPropStatus(() => 0);
              }}
              //! When status === 10 isCheked
              defaultChecked={propStatus === 10 ? true : false}
            />
            <label className="form-check-label">Compleat</label>
          </div>
        </div>
        <button
          // ! Updata Value
          onClick={e => {
            e.preventDefault();
            handleUpdateTask({
              id,
              task: propTask,
              status: propStatus
            });
          }}
          className="btn btn-success"
          type="submit"
        >
          Edit
        </button>
        <button
          className="btn btn-danger ml-2"
          onClick={e => {
            e.preventDefault(); 
            cancelEdit();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Task;
