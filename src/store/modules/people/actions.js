import axios from "../../../lib/axios";
import * as types from "./mutation-types";

export function getPeopleList({ commit }) {
  return axios
    .get(`/people`)
    .then(response => {
      commit(types.SET_PEOPLELIST, response.data);
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
