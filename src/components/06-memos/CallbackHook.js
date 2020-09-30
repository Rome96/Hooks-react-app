import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement';
import './memos.css';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  const increment = useCallback((num) => {
    setCounter( c => c + num);
  }, [setCounter]);


  useEffect(() => {
    //
  }, [increment]);

  return (
    <div>
      <h3>Callback Hook <small>{counter}</small> </h3>
      <hr/>
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;