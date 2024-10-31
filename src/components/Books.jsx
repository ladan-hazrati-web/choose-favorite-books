import Search from "./Search";
import { books as bookItems } from "../constants/mockData";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";
import FavoriteBook from "./FavoriteBook";
import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) ||
      bookItems.map((book) => ({ ...book, like: false }))
  );
  const [searchText, setSearchText] = useState("");

  const filteredBooks = books.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    if (!searchText) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books, searchText]);

  const likeHandler = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((item) =>
        item.id === id ? { ...item, like: !item.like } : item
      )
    );
  };

  return (
    <div>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        searchBooks={(e) => e.preventDefault()}
      />
      <div className={styles.container}>
        <div>
          {filteredBooks.length === 0 ? (
            <h2 style={{ color: "white", margin: "20px" }}>Books Not Found</h2>
          ) : (
            filteredBooks.map((book) => (
              <BookItem key={book.id} book={book} likeHandler={likeHandler} />
            ))
          )}
        </div>
        <div className={styles.favoriteBooks}>
          <h2
            style={{
              marginTop: "20px",
              backgroundColor: "blueviolet",
              padding: "10px",
            }}
          >
            Favorite Books
          </h2>
          {books.map((book) => (
            <FavoriteBook key={book.id} book={book} books={books} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
