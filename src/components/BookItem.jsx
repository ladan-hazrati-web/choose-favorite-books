import { FaHeart } from "react-icons/fa";
import styles from "./BookItem.module.css";
function BookItem({ book, likeHandler }) {
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <img src={book.image} alt={book.title} />
        <div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <h4>{book.language}</h4>
          <h5>{book.pages}</h5>
        </div>
      </div>
      <button onClick={() => likeHandler(book.id)}>
        <FaHeart size={20} color={book.like ? "red" : "white"} />
      </button>
    </div>
  );
}

export default BookItem;
