import axios from "../../../lib/axios";
import * as types from "./mutation-types";

export function getMovieList({ commit }) {
  return axios
    .get(`/films`)
    .then(response => {
      commit(types.SET_MOVIELIST, response.data);
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
