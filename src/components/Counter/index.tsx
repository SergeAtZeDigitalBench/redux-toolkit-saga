import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  incrementAsync,
  decrement,
} from "../../redux/slices/counterslice";
import { RootState, CounterState } from "../../types";

const Counter = (): JSX.Element => {
  const counter = useSelector<RootState, CounterState>(
    (state) => state.counter
  );
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-2 h-[100vh] flex flex-col justify-center items-center gap-2">
      <h2 className="text-xl font-bold">Counter</h2>
      <h4>Count: {counter.value}</h4>
      <p>Status: {counter.status}</p>
      <div className="flex gap-1 justify-center">
        <button
          onClick={() => dispatch(increment())}
          className="px-2 py-1 bg-slate-400 hover:bg-gray-500"
        >
          increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-2 py-1 bg-slate-400 hover:bg-gray-500"
        >
          decrement
        </button>
        <button
          onClick={() => dispatch(incrementAsync(3) as any)}
          className="px-2 py-1 bg-slate-400 hover:bg-gray-500"
        >
          increment async
        </button>
      </div>
    </div>
  );
};

export default Counter;
