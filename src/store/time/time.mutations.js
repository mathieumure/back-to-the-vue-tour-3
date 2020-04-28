import moment from "moment";

export const INITIAL_STATE = {
  currentTime: moment(),
  timesVisited: [moment()]
};

export const SET_CURRENT_TIME = (state, time) => {
  state.currentTime = time;
};

export const ADD_TIME_VISITED = (state, time) => {
  state.timesVisited.push(time);
};
