import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <NavLink to="/">All Books</NavLink> ||{" "}
      <NavLink to="/favorites">favorites</NavLink> ||{" "}
      <NavLink to="/read">read</NavLink> ||{" "}
      <NavLink to="/profile">profile</NavLink>
    </>
  );
};
