import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // 🔁 Replace with your Render API URL
  withCredentials: true, // needed if sending/receiving cookies or auth headers
});

export default axiosInstance;