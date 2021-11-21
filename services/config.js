import axios from "axios";

export const http = axios.create({
  baseURL: "http://10.0.0.104:3000",
});
