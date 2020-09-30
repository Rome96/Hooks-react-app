import React, { useState } from 'react'
import {useCounter} from '../hooks'
import { Small } from './Small'
import './memos.css'


const Memorize = () => {
  const {counter, increment} = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <>
      <h3>
        Memorize <Small value={counter} />
      </h3>
      <hr />
      <button onClick={() => increment(1)} className='btn btn-primary'>
        + 1
      </button>
      <br />
      <button onClick={() => setShow(!show)} className='btn btn-outline-primary mt-5'>
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  );
}

export default Memorize;