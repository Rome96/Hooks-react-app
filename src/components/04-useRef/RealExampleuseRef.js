import React, { useState } from 'react';
import MultipleCustomsHooks from '../03-example/MultipleCustomsHooks';

const RealExampleuseRef = () => {

  const [show, setShow] = useState(true)

  return (
    <>
      { !show && <> <h3>Real Example useRef</h3> <hr/> </> }
      { show && <MultipleCustomsHooks/> }
      <br/>
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary mt-5"
      >
        Show/Hide
      </button>
    </>
  );
};

export default RealExampleuseRef;