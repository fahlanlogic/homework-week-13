import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../lib/fetch";

export default function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = await login(formData.email, formData.password);
      window.localStorage.setItem("token", user.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="hero min-h-screen px-4 md:w-5/6 max-w-md mx-auto flex items-center">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-10 text-slate-800 md:text-4xl">
            Login
          </h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border px-3 py-2 rounded-full"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border p-2 mb-5 px-3 py-2 rounded-full"
              onChange={handleChange}
            />
            <button
              className="bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-lg rounded-full p-2 font-semibold hover:opacity-90 duration-300 disabled:bg-pink-300"
              onSubmit={handleSubmit}>
              Login
            </button>
          </form>
          <div className="flex gap-2 justify-center mt-6">
            <p className="text-slate-700">Dont have an account?</p>
            <Link to={"/sign-up"}>
              <span className="text-blue-600">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
