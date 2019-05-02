/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import md5 from "md5";
import strictUriEncode from "strict-uri-encode";

import { LOGIN, PASSWORD } from "./const";
import { fetchTasksGet, fetchTaskPost } from "./state/middleware";
import {
  changeDirection,
  sortBy,
  goToPreviousPage,
  goToNextPage,
  logIn,
  logOut
} from "./state/actions";

import Header from "./components/Heder";
import Edit from "./components/Edit";
import Form from "./components/Form";
import SortButtons from "./components/SortButtons";
import TaskList from "./components/TaskList";
import Pagination from "./components/Pagination";

const App = ({
  // state property
  tasks,
  token,
  login,
  loged,
  page,
  totalTaskCount,
  //action
  fetchTasksGet,
  fetchTaskPost,
  changeDirection,
  sortBy,
  goToPreviousPage,
  goToNextPage,
  logIn,
  logOut
}) => {
  // sort button toggle
  const [lastPushed, setLastPushed] = useState("id");

  //task edit propertis
  const [editTask, setEditTask] = useState({});

  // DidMount
  useEffect(() => {
    fetchTasksGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hendleClickSortBtn = evn => {
    const btnValue = evn.target.value;
    if (btnValue === lastPushed) {
      changeDirection();
    } else {
      sortBy(btnValue);
      setLastPushed(() => btnValue);
    }
    fetchTasksGet();
  };

  const handlerPagenation = (e, btnName) => {
    if (!e.target.className.split(" ").some(val => val === "disabled")) {
      btnName === "next" ? goToNextPage() : goToPreviousPage();
      fetchTasksGet();
    }
  };

  const handleLogin = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (data.get("login") === LOGIN && data.get("password") === PASSWORD) {
      logIn();
    }
  };

  const handleLogOut = e => {
    e.preventDefault();
    logOut();
  };

  const handleCreatTask = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const bodyRequest = {};
    for (let key of data.keys()) {
      bodyRequest[key] = data.get(key);
    }
    fetchTaskPost(JSON.stringify(bodyRequest), "/create");
  };

  const handleEditTask = data => {
    setEditTask(() => data);
  };

  const handleUpdateTask = data => {
    const { task, status, id } = data;
    const requestStr = `status=${{ status }}&task=${{ task }}&token=${{
      token
    }}`;
    const signature = strictUriEncode(md5(requestStr));
    const bodyRequest = { task, status, token, signature };
    const url = `/edit/${id}`;
    fetchTaskPost(JSON.stringify(bodyRequest), url);
    fetchTasksGet();
    setEditTask(() => ({}));
  };

  const cancelEdit = () => {
    setEditTask(() => ({}));
  };

  return (
    <div className="container pt-5 mt-5">
      <Header
        handleLogin={handleLogin}
        handleLogOut={handleLogOut}
        loged={loged}
      />
      <Form handleCreatTask={handleCreatTask} />
      {login && Object.keys(editTask).length ? (
        <Edit
          taskForEdit={editTask}
          handleUpdateTask={handleUpdateTask}
          cancelEdit={cancelEdit}
        />
      ) : null}
      <SortButtons hendleClickSortBtn={hendleClickSortBtn} />
      <TaskList
        taskList={tasks}
        handleEditTask={handleEditTask}
        permission={login}
      />
      <Pagination
        previous={page - 3 > -1}
        next={page + 3 < totalTaskCount}
        handlerPagenation={handlerPagenation}
      />
      <h1>{Object.keys(editTask)}</h1>
    </div>
  );
};

const mapStateToProps = store => ({
  tasks: store.tasks,
  token: store.token,
  login: store.login,
  totalTaskCount: store.pageControl.totalTaskCount,
  page: store.pageControl.page,
  loged: store.login
});

export default connect(
  mapStateToProps,
  {
    fetchTasksGet,
    changeDirection,
    sortBy,
    goToPreviousPage,
    goToNextPage,
    logIn,
    logOut,
    fetchTaskPost
  }
)(App);
