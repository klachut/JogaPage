import React from "react";
import { NavLink } from "react-router-dom";
import { menuLink } from "../external/menuItems";

const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        // className="site-title"
        className={({ isActive }) => (isActive ? "site-title" : "site-title")}
      >
        Joga Page
      </NavLink>
      <ul>
        {menuLink.map((x) => (
          <li>
            <NavLink
              to={x.route}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {x.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
