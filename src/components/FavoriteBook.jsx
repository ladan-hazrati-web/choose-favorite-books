import styles from "./FavoriteBook.module.css";
function FavoriteBook({ book }) {
  return (
    <>
      {book.like && (
        <div className={styles.container}>
          <img src={book.image} alt="" />
          <p>{book.title}</p>
        </div>
      )}
    </>
  );
}

export default FavoriteBook;
