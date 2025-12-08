import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme-context";

export default function UseContextPage2() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonClass = `rounded-md w-34 h-8 ${theme == "light" ? "bg-black text-white" : "bg-white text-black"}`;

  return (
    <div
      className={`context ${theme} flex min-h-[500px] flex-col items-center p-3`}
    >
      <h3>Current theme: {theme}</h3>
      <p>Page 2 here</p>

      <button className={buttonClass} onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  );
}
