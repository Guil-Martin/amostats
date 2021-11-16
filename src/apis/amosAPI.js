import axios from "axios";

export const API = axios.create({
  baseURL: "", // uses proxy value of package.json to avoid CORS
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
