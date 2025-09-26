import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme-context";

export default function UseContextPage2() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`border-3 border-[${theme == "dark" ? "#fff" : "#000"}] p-5`}
    >
      <h3>Current theme: {theme}</h3>
      <p>Page 2 here</p>

      <button className="h-6 w-32 bg-red-500 text-white" onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  );
}
