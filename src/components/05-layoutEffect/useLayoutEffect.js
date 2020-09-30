import React, { useLayoutEffect, useRef, useState } from "react";
import "./layout.css";
import { useFetch, useCounter } from "../hooks";

const LayoutEffect = () => {
  const [boxSize, setBoxSize] = useState({})
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];
  const pRef = useRef()

  useLayoutEffect(() => {
   setBoxSize(pRef.current.getBoundingClientRect())
  }, [quote])

  return (
    <>
      <h3>useLayoutEffect</h3>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pRef} className="mb-0"> {quote} </p>
      </blockquote>
      <pre>
        { JSON.stringify(boxSize, null, 3) }
      </pre>
      <button onClick={() => increment(1)} className="btn btn-primary">
        Next &rarr;
      </button>
    </>
  );
};

export default LayoutEffect;
