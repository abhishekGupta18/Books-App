import { NavLink } from "react-router-dom";

import { useBooksContext } from "../Context/BooksContext";
import { useFavBooksContext } from "../Context/FavBookContext";
import "./BookCart.css";

export const BookCart = ({
  id,
  title,
  author,
  publisher,
  price,
  year,
  image,
  read,
}) => {
  const { addToFav, checkBook } = useFavBooksContext();
  const { addToRead } = useBooksContext();
  return (
    <article>
      <img src={image} alt={title} />
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      {read ? (
        <button disabled={true}>Already read</button>
      ) : (
        <button onClick={() => addToRead(id)}>Mark as read</button>
      )}
      {checkBook(id) === -1 ? (
        <button onClick={() => addToFav(id)}>Add To fav</button>
      ) : (
        <button>
          <NavLink to="/favorites">go to fav</NavLink>
        </button>
      )}
    </article>
  );
};
{
  /* <button onClick={() => addToFav(id)}>Add To fav</button> */
}
