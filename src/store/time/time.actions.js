export const timeTravel = ({ commit }, time) => {
  commit("SET_CURRENT_TIME", time);
  commit("ADD_TIME_VISITED", time);
};
