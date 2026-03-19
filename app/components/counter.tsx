"use client";

import { useState } from "react";

export function Counter() {
  const [data, setData] = useState(0);
  return (
    <div className="mt-5 flex items-center justify-center space-x-8">
      <div>{data}</div>
      <button
        onClick={() => setData(data + 1)}
        className="rounded-2xl border border-b-amber-600 p-6 shadow-2xl"
      >
        Increment
      </button>
      <button
        onClick={() => setData(data - 1)}
        className="rounded-2xl border border-b-amber-600 p-6 shadow-xl"
      >
        Decrement
      </button>
      <button
        onClick={() => setData(0)}
        className="rounded-2xl border border-b-amber-600 p-6 shadow-xl"
      >
        Reset
      </button>
    </div>
  );
}
