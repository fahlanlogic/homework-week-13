import { useEffect, useState } from "react";
import { getAllBooks } from "../lib/fetch";
import { Link } from "react-router-dom";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getAllBooks();
      setBooks(data.books);
    };
    fetchBooks();
  }, []);
  console.log(books);

  return (
    <main className="min-h-screen min-w-full mx-auto">
      <h1 className="pt-20 pb-10 text-3xl font-bold text-slate-800">Books</h1>

      <div className="grid grid-cols-4 gap-4">
        {books &&
          books.length > 0 &&
          books.map(book => (
            <div
              key={book.id}
              className="border border-slate-300 shadow-lg mb-4 rounded-md overflow-hidden">
              <h1 className="text-xl font-semibold py-1.5 ">{book.title}</h1>
              <Link to={`/books/${book.id}`}>
                <div className="h-80 w-full overflow-hidden">
                  <img
                    src={`http://localhost:8000/${book.image}`}
                    alt={`${book.title}`}
                    className="h-80 w-full object-cover"
                  />
                </div>
              </Link>
              {/* <p className=" py-1.5">{book.year}</p> */}
              <Link to={`/books/${book.id}`}>
                <p className="w-full cursor-pointer bg-gradient-to-b from-blue-800 to-blue-900 text-white  py-2 px-4">
                  Read Now
                </p>
              </Link>
            </div>
          ))}
      </div>
    </main>
  );
}
