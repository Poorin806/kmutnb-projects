import React, { useState } from "react";

export default function Page1() {
  const [getCounter, setCounter] = useState(0);

  return (
    <div>
      <h1>Current Count: {getCounter}</h1>
      {getCounter >= 10 && <h2>10 Times already</h2>}

      <button onClick={() => setCounter(getCounter + 1)}>Add</button>
      <button onClick={() => setCounter(getCounter - 1)}>Remove</button>
    </div>
  );
}
