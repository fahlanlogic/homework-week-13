import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetailById } from "../lib/fetch";
import BookForm from "../components/BookForm";

export default function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  return <BookForm bookData={book} />;
}
