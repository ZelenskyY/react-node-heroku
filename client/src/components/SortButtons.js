import React from "react";

const SortButtons = ({ hendleClickSortBtn }) => (
  <div>
    <div>Sort by:</div>
    <div className="btn-group btn-group-toggle mb-2" data-toggle="buttons">
      <button
        className="btn btn-secondary"
        onClick={hendleClickSortBtn}
        value="id"
      >
        ID
      </button>
      <button
        className="btn btn-secondary"
        onClick={hendleClickSortBtn}
        value="username"
      >
        User Name
      </button>
      <button
        className="btn btn-secondary"
        onClick={hendleClickSortBtn}
        value="email"
      >
        Email
      </button>
      <button
        className="btn btn-secondary"
        onClick={hendleClickSortBtn}
        value="status"
      >
        Status
      </button>
    </div>
  </div>
);

export default SortButtons;
