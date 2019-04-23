import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="pt-5 mt-5">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <main className="container">
        <div className="jumbotron">
          <h1>Navbar example</h1>
          <p className="lead">
            This example is a quick exercise to illustrate how fixed to top
            navbar works. As you scroll, it will remain fixed to the top of your
            browser's viewport.
          </p>
          <a
            className="btn btn-lg btn-primary"
            href="https://getbootstrap.com/docs/4.1/components/navbar/"
            role="button"
          >
            View navbar docs »
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
