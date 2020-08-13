import * as types from "./mutation-types";

export default {
  [types.SET_MOVIELIST](state, payload) {
    state.movieList = payload;
  }
};
