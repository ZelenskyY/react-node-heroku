import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  CHANGE_DIRECTION,
  SORT_BY,
  GO_TO_NEXT_PAGE,
  GO_TO_PREVIOUS_PAGE,
  LOG_IN,
  LOG_OUT
} from "../actions";

import { TOKEN } from '../../const'

const initState = {
  status: "",
  token: '',
  tasks: [],
  login: false,
  loading: false,
  pageControl: {
    page: 0, //offset
    direction: "asc", // or "desc"
    sortField: "id", //(id | username | email | status)
    totalTaskCount: 0
  }
};

export const appReducer = (state = initState, actions) => {
  switch (actions.type) {
    // ! async cases
    case FETCH_DATA_BEGIN:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      if (actions.payload.data.status !== "ok") {
        return state;
      }
      const newState = {
        ...state,
        loading: false,
        tasks: actions.payload.data.message.task
      };
      return setPageControlProp(
        newState,
        "totalTaskCount",
        actions.payload.data.message.total_task_count
      );
    case FETCH_DATA_ERROR:
      return state;

    // ! sync cases
    case CHANGE_DIRECTION:
      return setPageControlProp(
        state,
        "direction",
        state.pageControl.direction === "asc" ? "desc" : "asc"
      );
    case SORT_BY:
      return setPageControlProp(state, "sortField", actions.param);
    case GO_TO_NEXT_PAGE:
      const nextPage = state.pageControl.page + 3;
      if (nextPage <= state.pageControl.totalTaskCount) {
        return setPageControlProp(state, "page", nextPage);
      }
      return state;
    case GO_TO_PREVIOUS_PAGE:
      const previousPage = state.pageControl.page - 3;
      if (previousPage >= 0) {
        return setPageControlProp(state, "page", previousPage);
      }
      return state;
    case LOG_IN:
      return { ...state, login: true, token: TOKEN };
    case LOG_OUT:
      return { ...state, login: false, token: '' };
    default:
      return state;
  }
};

function setPageControlProp(state, prop, val) {
  return {
    ...state,
    pageControl: {
      ...state.pageControl,
      [prop]: val
    }
  };
}

export default appReducer;
