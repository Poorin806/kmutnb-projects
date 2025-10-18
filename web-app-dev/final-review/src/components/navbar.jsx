import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <p>My App</p>

      <div className="nav-menu">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
        <NavLink to={"/page1"}>Page 1</NavLink>
      </div>
    </nav>
  );
}
