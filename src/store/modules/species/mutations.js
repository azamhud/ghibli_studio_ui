import * as types from "./mutation-types";

export default {
  [types.SET_SPECIESLIST](state, payload) {
    state.speciesList = payload;
  }
};
