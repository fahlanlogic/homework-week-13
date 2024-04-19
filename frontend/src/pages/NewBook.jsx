import { useEffect, useState } from "react";
import { newBook } from "../lib/fetch";

export default function NewBook() {
  const [formData, setFormData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(selectedImage);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await newBook(formData);
      e.target.reset();
      alert("Book created successfully");
    } catch (error) {
      alert(error.message);
    }
    console.log(formData);
  };

  useEffect(() => {
    if (formData.image) {
      setSelectedImage(`http://localhost:8000/${formData.image}`);
    }
  }, [formData]);

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
                  id="title"
                  className="border px-3 py-2 rounded-lg"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formControl flex flex-col text-left gap-1">
                <label htmlFor="author">
                  Author <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="author"
                  className="border px-3 py-2 rounded-lg"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formControl flex flex-col text-left gap-1">
                <label htmlFor="publisher">
                  Publisher <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="publisher"
                  className="border px-3 py-2 rounded-lg"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formControl flex flex-col text-left gap-1">
                <label htmlFor="year">
                  Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="year"
                  className="border px-3 py-2 rounded-lg"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formControl flex flex-col text-left gap-1 w-full">
                <label htmlFor="pages">Pages</label>
                <input
                  type="number"
                  id="pages"
                  className="border px-3 py-2 rounded-lg"
                  onChange={handleChange}
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
                  id="image"
                  className="border px-3 py-2 rounded-lg w-full"
                  onChange={handleChange}
                  accept="image/*"
                  required
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
