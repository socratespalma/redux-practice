import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  decrease_5,
  increase,
  increase_5,
  reset,
} from "../actions/counterActions";

export default function Counter() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux counter</h1>
      <nav>
        <button onClick={() => dispatch(increase_5())}>+5</button>
        <button onClick={() => dispatch(increase())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(decrease())}>-1</button>
        <button onClick={() => dispatch(decrease_5())}>-5</button>
      </nav>
      <h3>{state.counter}</h3>
    </div>
  );
}
