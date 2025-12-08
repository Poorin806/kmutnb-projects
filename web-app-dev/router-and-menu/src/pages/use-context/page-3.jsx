import { useContext, useEffect, useState } from "react";

import ThemeContext from "../../contexts/theme-context";

export default function UseContextPage3() {
  const [time, setTime] = useState(new Date());
  const [counter, setCounter] = useState(0);

  const [isCounting, setIsCounting] = useState(true);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (isCounting) {
      const intervalId = setInterval(() => {
        setTime(new Date());
        setCounter((prev) => prev + 1);
      }, 1000);

      if (counter >= 10) {
        setIsCounting(false);
      }

      // Cleanup to prevent memory leaks
      return () => clearInterval(intervalId);
    }
  }, [isCounting, counter]);

  return (
    <div
      className={`context flex min-h-[500px] flex-col items-center gap-2 p-4 ${theme}`}
    >
      <h2 className="text-2xl font-bold">
        useEffect Example (With Theme - Context)
      </h2>
      <p className="text-lg">🕒 Time now: {time.toLocaleTimeString()}</p>
      <p className="text-lg">🔢 Total count: {counter}</p>
    </div>
  );
}
