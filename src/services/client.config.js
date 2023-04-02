import axios from "axios";

export const createHTTPClient = ({ baseURL, timeout }) => {
  return axios.create({
    baseURL,
    timeout,
  });
};
