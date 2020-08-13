import * as types from "./mutation-types";

export default {
  [types.SET_VEHICLESLIST](state, payload) {
    state.vehiclesList = payload;
  }
};
