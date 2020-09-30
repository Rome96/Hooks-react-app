import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks";
import { heavyProcess } from "../../helpers/heavyProcess";

import "./memos.css";

const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

  return (
    <>
      <h3> MemoHook <small> {counter} </small> </h3>
      <hr />

      { memoHeavyProcess }
      <br/>
      <button onClick={() => increment(1)} className="btn btn-primary">
        + 1
      </button>
      <br />
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary mt-5"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
