import axios from "../../../lib/axios";
import * as types from "./mutation-types";

export function getVehiclesList({ commit }) {
  return axios
    .get(`/vehicles`)
    .then(response => {
      commit(types.SET_VEHICLESLIST, response.data);
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
