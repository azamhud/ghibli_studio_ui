import axios from "../../../lib/axios";
import * as types from "./mutation-types";

export function getSpeciesList({ commit }) {
  return axios
    .get(`/species`)
    .then(response => {
      commit(types.SET_SPECIESLIST, response.data);
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
