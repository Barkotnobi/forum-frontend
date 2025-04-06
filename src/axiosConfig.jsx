import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:6063/api",

  baseURL: "https://forum-backend-67q5.onrender.com/api",
});
export default axiosBase;