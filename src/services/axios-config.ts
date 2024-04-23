import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.2.10.247:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
