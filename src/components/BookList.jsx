import React, { useEffect, useState } from "react";
import book from "../assets/book.png";
import { Link, useLocation } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { db } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import trash from "../assets/trash.svg";
import pencil from "../assets/pencil.svg";

export default function BookList() {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let search = params.get("search");

  let [error, setError] = useState("");
  let [books, setBooks] = useState([]);
  let [loading, setLoading] = useState(false);

  let deleteBook = async (e, id) => {
    e.preventDefault();
    let ref = doc(db, "books", id);
    await deleteDoc(ref); //backend delete
  };

  useEffect(function () {
    setLoading(true);
    let ref = collection(db, "books");
    let q = query(ref, orderBy("date", "desc"));
    onSnapshot(q, (docs) => {
      if (docs.empty) {
        setError("no documents found");
        setLoading(false);
      } else {
        let books = [];
        docs.forEach((doc) => {
          let book = { id: doc.id, ...doc.data() };
          books.push(book);
        });
        setBooks(books);
        setLoading(false);
        setError("");
      }
    });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  let { isDark } = useTheme();

  return (
    <div>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {/* book list */}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {books.map((b) => (
            <div key={b.id}>
              <Link to={`/books/${b.id}`}>
                <div
                  className={`p-4 border min-h-[420px] ${
                    isDark ? "text-white bg-dcard border-primary" : ""
                  }`}
                >
                  <img src={book} alt="" />
                  <div className="text-center space-y-2 mt-3">
                    <h1>{b.title}</h1>
                    <p>{b.description}</p>
                  </div>
                </div>
              </Link>

              <div className="flex justify-between items-center mt-2 px-2">
                <div>
                  {b.categories?.map((c) => (
                    <span
                      key={c}
                      className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 items-center">
                  <Link to={`/edit/${b.id}`}>
                    <img src={pencil} alt="" />
                  </Link>

                  <img
                    src={trash}
                    alt=""
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteBook(e, b.id);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {books && !books.length && (
        <p className="text-center text-xl text-gray-500">
          No Search Results Found
        </p>
      )}
    </div>
  );
}
