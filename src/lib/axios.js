import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const BASE_URL =
  // import.meta.env.MODE != "dev"
    // "https://strimo-server.netlify.app/api"
  //   : "http://localhost:5001/api";
  // "http://localhost:5001/api";
  "https://strimo-server-production.up.railway.app/api";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
