import { createContext, useContext, useEffect, useState } from "react";

import { fakeFetch } from "../fakeFetch";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [booksList, setBooksList] = useState({});

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/books");
      if (response?.status === 200) {
        setBooksList(response?.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addToRead = (id) => {
    const bookToAdd = booksList?.books?.map((item) => {
      if (item?.id === id) {
        return { ...item, read: true };
      } else {
        return item;
      }
    });
    setBooksList({ ...booksList, books: bookToAdd }); // react most imp line niharika op 🙌🙌
  };

  const removeFromRead = (id) => {
    const bookToRemove = booksList?.books?.map((item) => {
      if (item?.id === id) {
        return { ...item, read: false };
      } else {
        return item;
      }
    });
    setBooksList({ ...booksList, books: bookToRemove });
  };

  const readBooks = booksList?.books?.filter((item) => item.read);
  return (
    <BooksContext.Provider
      value={{ booksList, readBooks, addToRead, removeFromRead }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(BooksContext);
};
