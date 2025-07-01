import axios from "axios";

// In production, there's no localhost, so we use the relative path (dynamic path)
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
