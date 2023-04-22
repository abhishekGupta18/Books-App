import "./FavBooks.css";
import { useFavBooksContext } from "../Context/FavBookContext";
export const FavouriteBooks = () => {
  const { favBooks, removeFromFav } = useFavBooksContext();

  return (
    <div>
      <h1>Favourite books</h1>
      <ul
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {favBooks?.map(
          ({ id, title, author, publisher, price, year, image, read }) => (
            <article>
              <img src={image} alt={title} />
              <p>Title: {title}</p>
              <p>Author: {author}</p>
              <button onClick={() => removeFromFav(id)}>
                Remove from favourite
              </button>
            </article>
          )
        )}
      </ul>
    </div>
  );
};
