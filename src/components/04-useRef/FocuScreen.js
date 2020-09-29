import React from 'react'
import './useRef.css';
const FocuScreen = () => {
  return (
    <>
      <h3>Focus Secreen</h3>
      <hr/> 
      <input
        className='form-control'
        placeholder='Su nombre'
      />
      <button
        className='btn btn-primary mt-5'
      >
        Focus
      </button>
    </>
  )
}

export default FocuScreen