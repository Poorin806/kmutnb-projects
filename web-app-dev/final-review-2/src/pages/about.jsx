import React, { useContext } from "react";
import { ThemeContext } from "../components/theme-context";

export default function AboutPage() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>About this app?</h1>
      <button
        onClick={() => {
          if (theme == "light") setTheme("dark");
          else setTheme("light");
        }}
      >
        Toggle theme {theme}
      </button>
    </div>
  );
}
