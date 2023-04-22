import "./ReadBook.css";
import { useBooksContext } from "../Context/BooksContext";
export const ReadBooks = () => {
  const { readBooks, removeFromRead } = useBooksContext();
  // const readBooks = booksList?.books?.filter((item) => item.read);

  return (
    <div>
      <h1>Read Books</h1>
      <ul
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {readBooks?.map(
          ({ id, title, author, publisher, price, year, image, read }) => (
            <article>
              <img src={image} alt={title} />
              <p>Title: {title}</p>
              <p>Author: {author}</p>
              <button onClick={() => removeFromRead(id)}>
                Remove from read
              </button>
            </article>
          )
        )}
      </ul>
    </div>
  );
};
