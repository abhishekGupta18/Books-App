import { createContext, useContext, useEffect, useState } from "react";

import { fakeFetch } from "../fakeFetch";

const BooksContext = createContext();

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

  return (
    <BooksContext.Provider value={{ booksList }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(BooksContext);
};
