import React from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome back!</h1>
      <p>What do you want to do?</p>

      <div className="menu">
        <NavLink to="/department">Department</NavLink>
        <NavLink to="/position">Position</NavLink>
        <NavLink to="/employee">Employee</NavLink>
        <NavLink to="/salary">Salary</NavLink>
      </div>
    </div>
  );
}
