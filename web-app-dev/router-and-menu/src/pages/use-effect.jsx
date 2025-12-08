import React, { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [time, setTime] = useState(new Date());
  const [counter, setCounter] = useState(0);

  const [isCounting, setIsCounting] = useState(true);

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
    <div className="flex flex-col items-center gap-2 p-4">
      <h2 className="text-2xl font-bold text-blue-600">useEffect Example</h2>
      <p className="text-lg">🕒 Time now: {time.toLocaleTimeString()}</p>
      <p className="text-lg">🔢 Total count: {counter}</p>
    </div>
  );
}
