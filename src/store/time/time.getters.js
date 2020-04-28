export const CURRENT_TIME = ({ currentTime }) => currentTime;

export const LAST_TIME_DEPARTED = state => state.timesVisited.slice(-2)[0];
