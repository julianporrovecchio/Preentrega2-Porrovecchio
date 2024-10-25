import React from "react";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/category/jewelery"}>Jewelery</NavLink>
        </li>
        <li>
          <NavLink to={"/category/electronics"}>Electronics</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
