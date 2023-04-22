import { createContext, useContext, useState } from "react";
import { useBooksContext } from "./BooksContext";

export const FavBooksContext = createContext();

export const FavBooksContextProvider = ({ children }) => {
  const [favBooks, setFavBooks] = useState([]);
  const { booksList } = useBooksContext();

  const addToFav = (id) => {
    const addBook = booksList?.books?.find((item) => item.id === id);
    setFavBooks([...favBooks, addBook]);
  };

  const removeFromFav = (id) => {
    const removeBook = favBooks?.filter((item) => item?.id !== id);
    setFavBooks(removeBook);
  };

  return (
    <FavBooksContext.Provider value={{ addToFav, removeFromFav, favBooks }}>
      {children}
    </FavBooksContext.Provider>
  );
};

export const useFavBooksContext = () => {
  return useContext(FavBooksContext);
};
