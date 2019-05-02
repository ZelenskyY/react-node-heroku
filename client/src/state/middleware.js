import { fetchDataBegin, fetchDataSuccess, fetchDataError } from "./actions";
import { DEVELOPER } from "../const";

export const fetchTasksGet = () => async (dispatch, getState) => {
  dispatch(fetchDataBegin());
  const sort = `&sort_field=${getState().pageControl.sortField}`;
  const direction = `&sort_direction=${getState().pageControl.direction}`;
  const page = `&page=${getState().pageControl.page}`;
  const url = `/app?developer=${DEVELOPER + sort + direction + page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (err) {
    console.error(err);
    dispatch(fetchDataError());
  }
};

export const fetchTaskPost = (data, url) => async dispatch => {
  dispatch(fetchDataBegin());
  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    });
    const json = await response.json();
    console.log(json);
    dispatch(fetchTasksGet());
  } catch (err) {
    console.error(err);
    dispatch(fetchDataError());
  }
};

