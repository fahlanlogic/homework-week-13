import instance from "./axios";

const register = async (name, email, password) => {
  try {
    const res = await instance.post("/register", { name, email, password });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

const login = async (email, password) => {
  try {
    const res = await instance.post("/login", { email, password });
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
};

export { login, register };
