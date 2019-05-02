import React from "react";

const Header = ({ handleLogin, handleLogOut, loged }) => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <form
        onSubmit={ e => {
          loged ? handleLogOut(e) : handleLogin(e);
        }}
        className="form-inline mt-2 mt-md-0 ml-auto"
      >
        {!loged && (
          <div className="form-inline">
            <div className="form-group mr-sm-2">
              <label className="sr-only">Password</label>
              <input
                type="login"
                className="form-control"
                name="login"
                placeholder="Login"
              />
            </div>
            <div className="form-group mr-sm-2">
              <label className="sr-only">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>
        )}
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          {loged ? "Log out" : "Log in"}
        </button>
      </form>
    </div>
  </nav>
);

export default Header;
