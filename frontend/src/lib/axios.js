import axios from "axios";

// SET UP AXIOS
const baseUrl = "http://localhost:8000";
const instance = axios.create({ baseUrl });

// ADD INTERCEPTORS TO ADD AUTH TOKEN TO REQUEST HEADERS
instance.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
