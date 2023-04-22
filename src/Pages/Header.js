import { NavLink } from "react-router-dom";

import { useFavBooksContext } from "../Context/FavBookContext";
import { useBooksContext } from "../Context/BooksContext";

export const Header = () => {
  const { favBooks } = useFavBooksContext();
  const { readBooks } = useBooksContext();
  return (
    <>
      <NavLink to="/">All Books </NavLink> ||{" "}
      <NavLink to="/favorites">favorites ({favBooks?.length})</NavLink> ||{" "}
      <NavLink to="/read">read ({readBooks?.length})</NavLink> ||{" "}
      <NavLink to="/profile">profile</NavLink>
    </>
  );
};
