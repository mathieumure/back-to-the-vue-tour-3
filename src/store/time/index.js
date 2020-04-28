import * as timeMutations from "./time.mutations";
import * as actions from "./time.actions";
import * as getters from "./time.getters";

const { INITIAL_STATE, ...mutations } = timeMutations;

export const time = {
  state: INITIAL_STATE,
  mutations,
  actions,
  getters
};
