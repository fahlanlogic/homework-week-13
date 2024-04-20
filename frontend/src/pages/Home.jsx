import { useEffect, useState } from "react";
import { deleteBook, getAllBooks } from "../lib/fetch";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteBook = async () => {
    try {
      await deleteBook(id);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
    const fetchBooks = async () => {
      const data = await getAllBooks();
      setBooks(data.books);
    };

    fetchBooks();
  }, []);

  return (
    <main className="min-h-screen min-w-full mx-auto">
      <h1 className="pt-20 pb-10 text-3xl font-bold text-slate-800">Books</h1>
      <div className="grid grid-cols-2 gap-4">
        {books &&
          books.length > 0 &&
          books.map(book => (
            <div
              key={book.id}
              className="border border-slate-300 shadow-lg mb-4 rounded-md flex overflow-hidden">
              <Link to={`/books/${book.id}`}>
                <div className="h-80 w-72 overflow-hidden">
                  <img
                    src={`http://localhost:8000/${book.image}`}
                    alt={`${book.title}`}
                    className="h-80 w-72 object-cover"
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-2 px-6 py-2 w-full text-left">
                <h1 className="text-xl font-semibold pb-3">{book.title}</h1>
                <div className="flex gap-2 flex-col mb-6">
                  <p className="px-1 border-r">
                    Author: <b>{book.author}</b>
                  </p>
                  <p className="px-1 border-r">
                    Publisher: <b>{book.publisher}</b>
                  </p>
                  <p className="px-1 border-r">
                    Year: <b>{book.year}</b>
                  </p>
                  <p className="px-1 ">
                    Pages: <b>{book.pages}</b>
                  </p>
                </div>
                {isLogin && (
                  <Link to={`/editbook/${book.id}`}>
                    <p className="text-center items-end rounded-md w-full cursor-pointer bg-gradient-to-b from-blue-800 to-blue-900 text-white  py-2 px-4">
                      Edit
                    </p>
                  </Link>
                )}
                {isLogin && (
                  <button
                    onClick={handleDeleteBook}
                    className="items-end rounded-md w-full cursor-pointer bg-gradient-to-b from-blue-800 to-blue-900 text-white  py-2 px-4">
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
