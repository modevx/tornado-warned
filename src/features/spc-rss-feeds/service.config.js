import axios from "axios";

export const HTTP_CLIENT = axios.create({
  baseURL: "api/spc-rss-feeds",
  timeout: 5000,
});
