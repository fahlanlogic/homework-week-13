// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../lib/fetch";
// import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await register(
        e.target.name.value,
        e.target.email.value,
        e.target.password.value
      );
      alert("You have been successfully registered!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main>
      <div className="hero min-h-screen px-4 md:w-5/6 max-w-md mx-auto flex items-center">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-10 text-slate-800 md:text-4xl">
            Register
          </h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}>
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              className="border px-3 py-2 rounded-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="user@mail.com"
              className="border px-3 py-2 rounded-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2 mb-5 px-3 py-2 rounded-full"
              required
            />
            <button
              className="bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-lg rounded-full p-2 font-semibold hover:opacity-90 duration-300 disabled:bg-pink-300"
              type="submit">
              Register
            </button>
          </form>
          <div className="flex gap-2 justify-center mt-6">
            <p className="text-slate-700">Have an account?</p>
            <Link to={"/login"}>
              <span className="text-blue-600">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
