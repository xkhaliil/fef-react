"use client";

import { useState } from "react";

import { Counter } from "./components/counter";

export default function Home() {
  const [data, setData] = useState(0);
  return (
    <div>
      <Counter />
    </div>
  );
}
