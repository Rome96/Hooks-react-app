import React, { useRef } from 'react'
import './useRef.css';

const FocuScreen = () => {

  const inputRef = useRef();

  
  const handleClick = () => {
    // document.querySelector('input').select();
    console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h3>Focus Secreen</h3>
      <hr />
      <input ref={inputRef} className="form-control" placeholder="Su nombre" />
      <button onClick={handleClick} className="btn btn-outline-primary mt-5">
        Focus
      </button>
    </>
  );
};

export default FocuScreen;