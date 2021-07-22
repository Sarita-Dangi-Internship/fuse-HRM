import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import routes from "../constants/routesURL";
import { getToken, setToken, removeToken } from "./token";

const config = {
  rest_url: process.env.REACT_APP_REST_URL,
};

axios.defaults.baseURL = config.rest_url;

axios.interceptors.request.use(function (config) {
  let storageItem = getToken("//any name");
  if (storageItem) {
    let session = JSON.parse(storageItem);
    config.headers["Authorization"] = `Bearer ${session.accessToken}`;
    return config;
  } else {
    return config;
  }
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const statusCode = error.response ? error.response.status : null;

    if (statusCode === 401) {
      removeToken();

      <Redirect to={routes.login} />;

      // notifier.error("Please login to access this resource");
    } else {
      return Promise.reject(error);
    }
  }
);
