import React from "react";
import { useCounter } from "../hooks/use-counter";
import SetCounter from "./setCounter";

export default function Counter() {
  const { count, increment, decrement, set } = useCounter();

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => set(0)}>reset</button>
        <button onClick={() => decrement()}>decrement</button>
      </div>
      <SetCounter />
    </>
  );
}
