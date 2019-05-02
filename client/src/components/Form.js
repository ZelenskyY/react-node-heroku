import React from "react";

const Form = ({ handleCreatTask }) => (
  <div className="card mb-3">
    <form
      className="card-body"
      onSubmit={e => {
        handleCreatTask(e);
      }}
    >
      <div className="form-row">
        <div className="col-5 mb-3">
          <label>Task</label>
          <textarea rows="3" name="task" type="text" className="form-control" />
        </div>
        <div className="col-3 mb-3">
          <label>User Name</label>
          <input type="text" name="username" className="form-control" />
        </div>
        <div className="col-3 mb-3">
          <label>Email</label>
          <input type="text" name="email" className="form-control" />
        </div>
        <div className="col-1 mb-3">
          <label>Score</label>
          <select rows="1" name="status" className="form-control">
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
      <button className="btn btn-primary" type="submit">
        Create
      </button>
    </form>
  </div>
);

export default Form;
