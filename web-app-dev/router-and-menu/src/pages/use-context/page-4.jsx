import { useContext, useState } from "react";
import UseStatePage from "../use-state";
import ThemeContext from "../../contexts/theme-context";

export default function UseContextPage2() {
  const [count, setCount] = useState(0);

  const { theme } = useContext(ThemeContext);

  const buttonClass = `rounded-md w-34 h-8 ${theme == "light" ? "bg-black text-white" : "bg-white text-black"}`;

  return (
    <div
      className={`context flex flex-col items-center gap-2 ${theme} min-h-[500px] p-4`}
    >
      <h2 className="text-xl font-bold">useState Ex (With Theme - Context)</h2>
      <p>{count}</p>
      <div className="flex items-center gap-2">
        <button
          className={`${buttonClass}`}
          onClick={() => setCount(count + 1)}
        >
          Add 1
        </button>
        <button
          className={`${buttonClass}`}
          onClick={() => setCount(count + 5)}
        >
          Add 5
        </button>
        <button
          className={`${buttonClass}`}
          onClick={() => setCount(count - 1)}
        >
          Remove 1
        </button>
        <button
          className={`${buttonClass}`}
          onClick={() => setCount(count - 5)}
        >
          Remove 5
        </button>
      </div>
    </div>
  );
}
