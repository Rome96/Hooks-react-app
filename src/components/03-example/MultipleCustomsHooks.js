import React from 'react';
import './example.css'
import { useFetch, useCounter } from '../hooks';

const MultipleCustomsHooks = () => {
  const { counter, increment } = useCounter(1);
  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h3>BreakingBad Quotes</h3>
      <hr />
      {loading ? (
        <div className="aler alert-info text-center">
          <p> Loading...</p>
        </div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
      <button onClick={() => increment(1)} className="btn btn-primary">
        Next &rarr;
      </button>
    </>
  );
};

export default MultipleCustomsHooks
