import React, { useState } from 'react'
import './memos.css';

const CallbackHook = () => {

  const [counter, setCounter] = useState(10)

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h3>Callback Hook <small>{counter}</small> </h3>
      <hr/>
    </div>
  );
};

export default CallbackHook;