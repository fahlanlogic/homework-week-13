import axios from "axios";

// SET UP AXIOS
const instance = axios.create({ baseURL: "http://localhost:8000" });

// ADD INTERCEPTORS TO ADD AUTH TOKEN TO REQUEST HEADERS
instance.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
