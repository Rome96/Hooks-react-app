import React from 'react';
import "./counter.css";
import { useCounter } from '../../hooks';

const CounterWithCustomHook = () => {

  const { state, increment, reset, decrement } = useCounter(10)

  return (
    <>
      <h2>Counter with hook {state}</h2>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-primary"> + 1 </button>
      <button onClick={reset} className="btn btn-success"> reset </button>
      <button onClick={() => decrement(2)} className="btn btn-danger"> - 1 </button>
    </>
  );
};

export default CounterWithCustomHook;
