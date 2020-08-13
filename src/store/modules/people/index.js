import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const initialState = {
  peopleList: []
};

const config = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters
};

export default config;
