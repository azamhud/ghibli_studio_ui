import axios from "../../../lib/axios";
import * as types from "./mutation-types";

export function getLocationList({ commit }) {
  return axios
    .get(`/locations`)
    .then(response => {
      commit(types.SET_LOCATIONLIST, response.data);
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
