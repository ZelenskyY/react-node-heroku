import React from "react";

const Pagination = ({ previous, next, handlerPagenation }) => (
  <nav className="d-flex justify-content-center fixed-bottom mb-3">
    <ul className="pagination">
      <li
        onClick={e => {
          handlerPagenation(e, "previous");
        }}
        className={"page-item " + (previous ? "" : "disabled")}
      >
        <button className="page-link">Previous</button>
      </li>
      <li
        onClick={e => {
          handlerPagenation(e, "next");
        }}
        className={"page-item " + (next ? "" : "disabled")}
      >
        <button className="page-link">Next</button>
      </li>
    </ul>
  </nav>
);

export default Pagination;
