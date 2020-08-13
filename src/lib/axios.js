import axios from "axios";
import tokenManager from "./token-manager";
import store from "../store";
import Vue from "vue";
import NProgress from "nprogress";
import Router from "../router";

export const CancelToken = axios.CancelToken;

// const API_BASE_URL = window.__config_api__.baseAPIURL;
const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

const request = axios.create({
  baseURL: API_BASE_URL
});

request.interceptors.request.use(
  config => {
    // const authToken = tokenManager.retrieve();

    // if (authToken) {
    //   config.headers["Authorization"] = `Bearer ${authToken}`;
    // }

    NProgress.start();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  error => {
    NProgress.done();
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        tokenManager.remove();
        Router.push("/login");
      }

      if (status === 403) {
        Vue.prototype.$notify({
          group: "notification",
          title: "Session Expired",
          text: "You have been redirect to login page, please login again!",
          type: "warn",
          duration: 10000
        });
        tokenManager.remove();
        Router.push("/login");
      }

      if (status === 500) {
        let message;
        // Parse JAVA error
        if (typeof error.response.data == "string") {
          let start = error.response.data.search('"errorDesc"');
          let end = error.response.data.search(',"developerMessage"');
          message = error.response.data.substring(start + 13, end - 1);
        }
        if (typeof error.response.data !== "string")
          message =
            error.response.data.description ||
            error.response.data.message ||
            "Internal Server";
        Vue.prototype.$notify({
          group: "notification",
          title: "Warning",
          text: message,
          type: "warn",
          duration: 5000
        });
        //Token invalid
        if (
          error.response.data.message.includes("401 Unauthorized") ||
          error.response.data.message.includes("Token invalid")
        ) {
          Vue.prototype.$notify({
            group: "notification",
            title: "Session Expired",
            text: "You have been redirect to login page, please login again!",
            type: "warn",
            duration: 10000
          });
          tokenManager.remove();
          Router.push("/login");
        }
      }
    } else {
      Vue.prototype.$notify({
        group: "notification",
        title: "Warning",
        text: error,
        type: "warn",
        duration: 10000
      });
    }
    // else {
    //   tokenManager.remove();
    //   Router.push("/login");
    // }
    return Promise.reject(error);
  }
);

/**
 * @param {import("axios").AxiosResponse} response
 */
export function getData(response) {
  return response.data;
}

export default request;
