import * as types from "./mutation-types";

export default {
  [types.SET_LOCATIONLIST](state, payload) {
    state.locationList = payload;
  }
};
