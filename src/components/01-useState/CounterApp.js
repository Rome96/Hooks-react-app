import React, {useState} from 'react';
import './counter.css';

const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20
  })

  const {counter1, counter2} = counter

  const handleIncrementCounter = () => {
    setCounter({
      ...counter,
      counter1: counter1 + 1,
    })
  }
  return (
    <>
      <h3>Counter1 {counter1}</h3>
      <h3>Counter2 {counter2}</h3>
      <hr />
      <button className="btn btn-primary" onClick={handleIncrementCounter}>
        + 1
      </button>
    </>
  );
};

export default CounterApp;