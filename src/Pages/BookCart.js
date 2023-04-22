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
  const { addToFav } = useFavBooksContext();
  return (
    <article>
      <img src={image} alt={title} />
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <button>Mark As Read</button>
      <button onClick={() => addToFav(id)}>Add To fav</button>
    </article>
  );
};
