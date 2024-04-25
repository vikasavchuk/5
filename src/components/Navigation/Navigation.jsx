import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const activeLinkClass = ({ isActive }) => {
    return clsx(css.navigationItem, { [css.active]: isActive });
  };
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};