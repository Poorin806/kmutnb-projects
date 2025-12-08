import { useState } from "react";
import ThemeContext from "../../contexts/theme-context";
import { NavLink, Outlet } from "react-router-dom";

export default function UseContextLayout() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light");

  const linkStyle =
    "px-3 py-1 rounded transition-colors duration-200 border-1 border-[#fff]/0 hover:border-green-300";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <nav className="mb-4 flex items-center justify-center gap-4 border-b border-[#fff] px-3 py-2">
        {["page-1", "page-2", "page-3", "page-4"].map((hook) => (
          <NavLink
            key={hook}
            to={`/usecontext/${hook}`}
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "bg-green-500 font-semibold" : ""}`
            }
          >
            {hook}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </ThemeContext.Provider>
  );
}
