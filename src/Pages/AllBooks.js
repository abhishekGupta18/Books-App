import { useBooksContext } from "../Context/BooksContext";
import { BookCart } from "./BookCart";

export const AllBooks = () => {
  const { booksList } = useBooksContext();
  return (
    <>
      <h2>All Books</h2>
      <ul
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {booksList?.books?.map((item) => (
          <BookCart {...item} />
        ))}
      </ul>
    </>
  );
};
