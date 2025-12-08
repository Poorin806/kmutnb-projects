import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const linkStyle =
    "px-3 py-1 rounded transition-colors duration-200 border-1 border-[#fff]/0 hover:border-green-300";

  return (
    <nav className="mb-4 flex items-center justify-center gap-4 border-b border-[#fff] px-3 py-2">
      {[
        "usestate",
        "useeffect",
        "usecontext",
        "usereducer",
        "useref",
        "usememo",
        "usecallback",
      ].map((hook) => (
        <NavLink
          key={hook}
          to={`/${hook}`}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-green-500 font-semibold" : ""}`
          }
        >
          {hook}
        </NavLink>
      ))}
    </nav>
  );
}
