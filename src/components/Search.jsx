import styles from "./Search.module.css";

function Search({ searchText, setSearchText, searchBooks }) {
  return (
    <form onSubmit={searchBooks}>
      <input
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}

export default Search;
