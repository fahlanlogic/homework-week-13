/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { editBook, newBook } from "../lib/fetch";

// eslint-disable-next-line react/prop-types
export default function BookForm({ bookData }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (bookData) {
      try {
        await editBook(
          bookData.id,
          formData.get("title"),
          formData.get("author"),
          formData.get("publisher"),
          parseInt(formData.get("year")),
          parseInt(formData.get("pages"))
        );
        alert("Book updated successfully");
      } catch (error) {
        alert(error.message);
      }
      return;
    }

    try {
      await newBook(formData);
      e.target.reset();
      alert("Book created successfully");
      setSelectedImage("");
    } catch (error) {
      alert(error.message);
    }
    console.log(formData);
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (bookData?.image) {
      setSelectedImage(`http://localhost:8000/${bookData?.image}`);
    }
  }, [bookData]);

  return (
    <main>
      <div className="min-h-screen px-4 md:w-5/6 max-w-2xl mx-auto flex items-center flex-col justify-center">
        <h1 className="text-3xl text-slate-800 font-bold mb-8">New Book</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full">
          <div className="flex gap-16 w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="formControl flex flex-col text-left gap-1">
                <label htmlFor="title">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  className="border px-3 py-2 rounded-lg"
                  // onChange={handleChange}
                  required
                  defaultValue={bookData?.title}
                />
              </div>
              <div className="formControl flex flex-col text-left gap-1">
                <label htmlFor="author">
                  Author <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="author"
                  className="border px-3 py-2 rounded-lg"
                  // onChange={handleChange}
                  required
                  defaultValue={bookData?.author}
                />
              </div>
              <div className="formControl flex flex-col text-left gap-1">
                <label htmlFor="publisher">
                  Publisher <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="publisher"
                  className="border px-3 py-2 rounded-lg"
                  // onChange={handleChange}
                  required
                  defaultValue={bookData?.publisher}
                />
              </div>
              <div className="formControl flex flex-col text-left gap-1">
                <label htmlFor="year">
                  Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="year"
                  className="border px-3 py-2 rounded-lg"
                  // onChange={handleChange}
                  required
                  defaultValue={bookData?.year}
                />
              </div>
              <div className="formControl flex flex-col text-left gap-1 w-full">
                <label htmlFor="pages">
                  Pages <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="pages"
                  className="border px-3 py-2 rounded-lg"
                  defaultValue={bookData?.pages}
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col text-left gap-4 w-full">
              <div className="formControl flex flex-col text-left gap-1">
                <label htmlFor="image">
                  Image <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="border px-3 py-2 rounded-lg w-full"
                  // onChange={handleChange}
                  accept="image/*"
                  required
                  onChange={e => {
                    const file = e.target.files[0];
                    setSelectedImage(URL.createObjectURL(file));
                  }}
                />
              </div>
              {selectedImage && (
                <img
                  className="w-full shadow-md rounded-md"
                  src={selectedImage}
                  alt="Selected Image"
                />
              )}
              <button
                className="bg-gradient-to-b from-blue-700 to-blue-800 text-white shadow-lg rounded-md p-2 font-semibold w-full hover:opacity-90 duration-300 disabled:bg-pink-300"
                type="submit">
                {bookData ? "Edit Book" : "Create Book"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
