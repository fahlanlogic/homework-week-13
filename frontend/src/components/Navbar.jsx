import { useEffect, useState } from "react";
import { IoBookSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [window.localStorage.getItem("token")]);

  const handleLogOut = () => {
    location.reload();
    window.localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-sm ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <IoBookSharp
            size={24}
            color="blue"
          />
          <span className="hidden md:block self-center text-slate-800 text-2xl font-semibold whitespace-nowrap ">
            Pustaka Buku
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isLogin && (
            <Link to="/newbook">
              <button
                type="button"
                className="text-white mr-4 bg-gradient-to-b from-blue-600 to-blue-700 hover:opacity-90 duration-300 font-medium rounded-md text-sm px-3 py-1 shadow-md text-center ">
                Add New Book
              </button>
            </Link>
          )}
          {!isLogin ? (
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-gradient-to-b from-blue-600 to-blue-700 hover:opacity-90 duration-300 font-medium rounded-md text-sm px-3 py-1 shadow-md text-center ">
                Login
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button
                type="button"
                className="text-white bg-gradient-to-b from-blue-600 to-blue-700 hover:opacity-90 duration-300 font-medium rounded-md text-sm px-3 py-1 shadow-md text-center"
                onClick={handleLogOut}>
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
