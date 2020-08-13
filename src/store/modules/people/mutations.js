import * as types from "./mutation-types";

export default {
  [types.SET_PEOPLELIST](state, payload) {
    state.peopleList = payload;
  }
};
