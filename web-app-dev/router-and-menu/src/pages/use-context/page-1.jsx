import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme-context";

export default function UseContextPage1() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`context ${theme} flex min-h-[500px] flex-col items-center gap-2`}
    >
      <h1>Current theme: {theme}</h1>
      <button
        className={`h-6 w-32 ${theme == "dark" ? "bg-black text-white" : "bg-white text-black"}`}
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
    </div>
  );
}
