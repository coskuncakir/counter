import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment, set } from "../actions";
import SetCounter from "./setCounter";

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => actions.increment()}>increment</button>
        <button onClick={() => actions.set(0)}>reset</button>
        <button onClick={() => actions.decrement()}>decrement</button>
      </div>
      <SetCounter />
    </>
  );
}
