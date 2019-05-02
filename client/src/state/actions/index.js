export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_SUCCESS_CREATE_TASK = "FETCH_DATA_SUCCESS_CREATE_TASK";
export const FETCH_DATA_SUCCESS_EDIT_TASK = "FETCH_DATA_SUCCESS_EDIT_TASK";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const GO_TO_NEXT_PAGE = "GO_TO_NEXT_PAGE";
export const GO_TO_PREVIOUS_PAGE = "GO_TO_PREVIOUS_PAGE";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const CHANGE_DIRECTION = "CHANGE_DIRECTION";
export const SORT_BY = "SORT_BY";

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

export const fetchDataSuccessCreateTask = data => ({
  type: FETCH_DATA_SUCCESS_CREATE_TASK,
  payload: { data }
});

export const fetchDataSuccessEditTask = data => ({
  type: FETCH_DATA_SUCCESS_EDIT_TASK,
  payload: { data }
});

export const fetchDataError = () => ({
  type: FETCH_DATA_ERROR
});

export const goToNextPage = () => ({
  type: GO_TO_NEXT_PAGE
});

export const goToPreviousPage = () => ({
  type: GO_TO_PREVIOUS_PAGE
});

export const logIn = () => ({
  type: LOG_IN
});

export const logOut = () => ({
  type: LOG_OUT
});

export const changeDirection = () => ({
  type: CHANGE_DIRECTION
});

export const sortBy = param => ({
  type: SORT_BY,
  param
});
