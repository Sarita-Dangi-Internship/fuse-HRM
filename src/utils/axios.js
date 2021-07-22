import axios from "axios";
import config from "../config";

// const instance = axios.create({
//   headers: { "Content-Type": "application/json" },
//   baseURL: config.baseURI,
// });

// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

// const config = {
//   rest_url: process.env.REACT_APP_REST_URL,
// };

axios.defaults.baseURL = config.baseURI;

axios.interceptors.request.use(function (config) {
  let storageItem = storage.getItem("//any name");
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
    if (statusCode === 404) {
      notifier.error(
        "The requested resource does not exist or has been deleted"
      );
    }
    if (statusCode === 401) {
      notifier.error("Please login to access this resource");
    } else {
      return Promise.reject(error);
    }
  }
);



