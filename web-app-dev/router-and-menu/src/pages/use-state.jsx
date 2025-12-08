import React, { useState } from "react";

const buttonClass = "rounded-md bg-blue-500 w-24 h-8";

export default function UseStatePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-xl font-bold">useState Ex</h2>
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
