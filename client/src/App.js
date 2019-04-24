/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const App = () => {
  return (
    <div className="pt-5 mt-5">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <form className="form-inline mt-2 mt-md-0 ml-auto">
            <div className="form-group mr-sm-2">
              <label for="inputPassword2" className="sr-only">
                Password
              </label>
              <input
                type="login"
                className="form-control"
                id="inputPassword2"
                placeholder="Login"
              />
            </div>
            <div className="form-group mr-sm-2">
              <label for="inputPassword2" className="sr-only">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </nav>

      <main className="container">
        {/* Input task start */}
        <form className="mb-5">
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Task</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          <div className="form-row">
            <div className="form-group mb-2 col-sm-5">
              <label className="sr-only">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group mb-2 col-sm-5">
              <label className="sr-only">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2 col-sm-2">
              Submit
            </button>
          </div>
        </form>
        {/* Input task start */}
        <div className="jumbotron">
          <div className="card">
            <fieldset disabled>
              <form class="card-body">
                <div class="form-row">
                  <div class="col-8 mb-3">
                    <label for="validationCustom03">Task</label>
                    <textarea
                      rows="3"
                      type="text"
                      class="form-control"
                      value={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ipsa ut perferendis, expedita, modi optio commodi nobis voluptas aliquid suscipit ad id itaque est enim quasi impedit culpa dolorem. Adipisci?`}
                    />
                  </div>
                  <div class="col-3 mb-3">
                    <label for="validationCustom04">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      value="thelensky@ya.ru"
                    />
                  </div>
                  <div class="col-1 mb-3">
                    <label for="validationCustom05">Score</label>
                    <select
                      rows="1"
                      class="form-control"
                      id="exampleFormControlSelect2"
                      value="10"
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
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      defaultChecked={true}
                    />
                    <label class="form-check-label" for="invalidCheck">
                      Compleat
                    </label>
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </form>
            </fieldset>
          </div>
        </div>
      </main>

      {/* Pagination start */}
      <nav className="d-flex justify-content-center fixed-bottom mb-3">
        <ul className="pagination">
          <li className="page-item disabled">
            <button className="page-link">Previous</button>
          </li>
          <li className="page-item">
            <button className="page-link">1</button>
          </li>
          <li className="page-item active">
            <button className="page-link">
              2 <span className="sr-only">(current)</span>
            </button>
          </li>
          <li className="page-item">
            <button className="page-link">3</button>
          </li>
          <li className="page-item">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
      {/* Pagination end */}
    </div>
  );
};

export default App;
