import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "http://localhost:4000/api", // Adjust to the backend URL
});

// Attach token to request headers if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Export API as the default export
export default API;


  