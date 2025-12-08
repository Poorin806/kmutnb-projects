import React, { useContext } from "react";
import { ThemeContext } from "../components/theme-context";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Welcome back, Poorin</h1>
      <p>Theme : {theme}</p>
    </div>
  );
}
