import instance from "./axios";

const login = async (email, password) => {
  try {
    const res = await instance.post("/login", { email, password });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { login };
