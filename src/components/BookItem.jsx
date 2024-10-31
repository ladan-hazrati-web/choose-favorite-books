import { FaHeart } from "react-icons/fa";
import styles from "./BookItem.module.css";
function BookItem({ book, likeHandler }) {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <img src={book.image} alt={book.title} />
        <div>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <h3>{book.language}</h3>
          <h4>{book.pages}</h4>
        </div>
      </div>
      <button onClick={() => likeHandler(book.id)}>
        <FaHeart size={20} color={book.like ? "red" : "white"} />
      </button>
    </div>
  );
}

export default BookItem;
